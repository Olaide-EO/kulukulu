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

	return (
     <View style={styles.container}>
       {rootStore.workoutStore.currentExercises.map(e => {
         
      return(
        <WorkoutCard 
         onSetPress={setIndex => {
           const v = e.sets[setIndex];
           let newValue: string;
           if( v === ''){
             newValue = `${e.reps}`
           }else if (v === '0') {
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
       <WorkoutTimer onXPress={() => {}} />
     </View>
		);
});


export default CurrentWorkout;