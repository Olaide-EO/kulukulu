import * as React from "react";
import { Text, View, StyleSheet, Button, FlatList} from "react-native";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../store/RootStore";
import { RouteComponentProps } from "react-router";
import { HistoryCard } from "../ui/HistoryCard";
import { CurrentExercise } from "../store/WorkoutStore";
import { Fab } from "../ui/Fab";

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
  container: {
    flex: 1
  }
  

})

const WorkoutHistory: React.FC<Props> = observer(({history}) => {
	
  const rootStore = React.useContext(RootStoreContext);
  
  const rows: Array<
    Array<{date: string;
      exercises: CurrentExercise[];
    }>
   > = [];

  Object.entries(rootStore.workoutStore.history).forEach(
    ([date, exercises], i) => {
    if (i % 3 === 0) {
      rows.push([{
        date,
        exercises
      }])
    } else {
      rows[rows.length - 1].push({
        date, 
        exercises
      });
    }
  })

	return (
       <View style={styles.container}>
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

          <FlatList 
             data={rows} 

             renderItem={({ item }) => {
              return (<View style={styles.row} >
                   {item.map(({ date, exercises}) => (
                       <View key={date} style={styles.cardContainer}>
                           <HistoryCard 
                               onPress={() => {
                                       const parts = date.split("-")
                                       history.push(`/workout/${parts[0]}/${parts[1]}/${parts[2]}`)
                                     }} 
                               header={date} 
                               currentExercises={exercises} 
                               />
                       </View>
                     ))}
                   {item.length < 3 ? <View style={styles.cardContainer} /> : null}
                   {item.length < 2 ? <View style={styles.cardContainer} /> : null}
                </View>)
             }}
             keyExtractor={(item) => item.reduce((pv,cv) => pv + " " + cv.date, "")} 

             />
         <Fab />
       </View>
		);
})



export default WorkoutHistory;