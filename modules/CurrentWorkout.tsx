import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { observer } from "mobx-react-lite";
import { RouterStoreContext } from "../store/RouterStore";
import { WorkoutCard } from "../ui/WorkoutCard"

interface Props {

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "fafafa",
    margin: 10,
  }
})

 const CurrentWorkout: React.FC<Props> = observer(() => {
     const routerStore = React.useContext(RouterStoreContext);
	return (
     <View style={styles.container}>
        <WorkoutCard />
     </View>
		);
});


export default CurrentWorkout;