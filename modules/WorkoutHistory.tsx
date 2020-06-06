import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../store/RootStore";
import { RouteComponentProps } from "react-router";
import { HistoryCard } from "../ui/HistoryCard";



interface Props extends RouteComponentProps {}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
    text: {
    color: '#000000'
  },
  cardContainer: { 
   flex: 1,
   padding: 10,
  },
  

})

const WorkoutHistory: React.FC<Props> = observer(({history}) => {
	
  const rootStore = React.useContext(RootStoreContext);
  
  const rows: JSX.Element[][] = [];

  Object.entries(rootStore.workoutStore.history).forEach(([dt, v], i) => {
    const hc = <View key={dt} style={styles.cardContainer}>   
                  <HistoryCard  header={dt} currentExercises={v} />
               </View>

    if (i % 3 === 0) {
      rows.push([hc])
    } else {
      rows[rows.length - 1].push(hc);
    }
  })

  /*
    [
      [hc, hc],
      [hc, hc],
      [hc, hc],
      [hc, hc],
    ]
  */


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
             history.push("/current-workout");	
             }} 
          />

          {rows.map((r, i) => (
             <View style={styles.row} key={i}>
               {r}
               {r.length < 3 ? <View style={styles.cardContainer} /> : null}
             </View>
            ))}

       </View>
		);
})



export default WorkoutHistory;