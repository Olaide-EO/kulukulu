import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { observer } from "mobx-react-lite";
import { RouterStoreContext } from "../store/RouterStore";

interface Props {}

const WorkoutHistory: React.FC<Props> = observer(() => {
	const routerStore = React.useContext(RouterStoreContext);

	return (
       <View>
         <Text style={styles.text}>Workout History page whatever you want is here, Jesus loves you and will be your help all the days of your life</Text>
         <Button 
             title="create workout"  
             onPress={() => {
             	routerStore.screen = "CurrentWorkout";
             }} 
          />
       </View>
		);
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  }

});


export default WorkoutHistory;