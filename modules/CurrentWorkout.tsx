import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../store/RootStore";
import { WorkoutCard } from "../ui/WorkoutCard"
import { WorkoutTimer } from "../ui/WorkoutTimer";
interface Props {

}

const styles = StyleSheet.create({
  container: {
    
    margin: 10,
    height: '80%'
  }
})

 const CurrentWorkout: React.FC<Props> = observer(() => {

     const rootStore = React.useContext(RootStoreContext);
     React.useEffect(() => {
       return () => {
         rootStore.workoutTimerStore.stopTimer();
       }
     }, [])

	return (
     <View style={styles.container}>
       {rootStore.workoutStore.currentExercises.map(e => {
         
      return(
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
