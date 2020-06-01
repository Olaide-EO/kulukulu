import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../store/RootStore";

interface Props {}

const WorkoutHistory: React.FC<Props> = observer(() => {
	const rootStore = React.useContext(RootStoreContext);


	return (
       <View>
         <Text style={styles.text}>Workout History Page</Text>
         <Button 
             title="create workout"  
             onPress={() => {
               rootStore.workoutStore.currentExercises.push(
               {
                exercise: "Squat",
                numSets: 5,
                reps: 5,
                sets: ["5", "5","5","5","5"],
                weight: 260
               },

               {
                exercise: "Bench Press",
                numSets: 5,
                reps: 5,
                sets: ["5", "5","5","5","5"],
                weight: 200
               },

               {
                exercise: "Deadlift",
                numSets: 1,
                reps: 5,
                sets: ["5", "x","x","x","x"],
                weight: 360
               }

               );
             	rootStore.routerStore.screen = "CurrentWorkout";
             }} 
          />
       </View>
		);
})

const styles = StyleSheet.create({
 
  text: {
    color: '#000000'
  }

});


export default WorkoutHistory;