import * as React from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../store/RootStore";
import { WorkoutCard } from "../ui/WorkoutCard"
import { WorkoutTimer } from "../ui/WorkoutTimer";
import { RouteComponentProps } from "react-router";
import dayjs from "dayjs";


interface Props extends RouteComponentProps<{
   year?: string
   month?: string
   day?: string
}> {}

const styles = StyleSheet.create({
  container: {
    
    margin: 10,
    height: '100%'
  },
  scrollContainer:{
    padding: 10,
    marginBottom: 50
  }
})

 const CurrentWorkout: React.FC<Props> = observer(({ history, match: { params: {day, month, year} } }) => {

     const rootStore = React.useContext(RootStoreContext);

     React.useEffect(() => {
       return () => {
         rootStore.workoutTimerStore.stopTimer();
       }
     }, []);



 const isCurrentWorkout = !year && !month && !day;    
 const dateKey = `${year}-${month}-${day}`;



	return (
     <View 
         style={styles.container}>
     <ScrollView 
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.scrollContainer}
     >
      {( isCurrentWorkout ? rootStore.workoutStore.currentExercises: rootStore.workoutStore.history[dateKey] 
         ).map(e => {
      return (
        <WorkoutCard 
         onSetPress={setIndex => {
           rootStore.workoutTimerStore.startTimer();
           const v = e.sets[setIndex];
           let newValue: string;
           if( v === ''){
             newValue = `${e.reps}`
           }else if (v === '0') {
             rootStore.workoutTimerStore.stopTimer();
             newValue = ''
           } else {
             newValue = `${parseInt(v) - 1}`
           }
           e.sets[setIndex] = newValue;
         }}
         key={e.exercise}
         sets={e.sets} 
         excercise={e.exercise} 
         repsAndWeight={`${e.numSets}x${e.reps} ${e.weight}`}
         />
        )    

      })}
       <Button title="SAVE" onPress={ () => {
         rootStore.workoutStore.history[dayjs(
           new Date(+new Date() - Math.floor(Math.random() * 10000000000))).format("YYYY-MM-DD")] = rootStore.workoutStore.currentExercises;
         rootStore.workoutStore.currentExercises = [];
         history.push('/')

       }} />
       
       </ScrollView>
       { rootStore.workoutTimerStore.isRunning ? (
         <WorkoutTimer 
         percent={rootStore.workoutTimerStore.percent}
         currentTime={rootStore.workoutTimerStore.display} 
         onXPress={() => rootStore.workoutTimerStore.stopTimer()} />
         ) : null
       
       }
     </View>
		);
});


export default CurrentWorkout;
