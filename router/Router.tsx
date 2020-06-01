import { RootStoreContext } from "../store/RootStore"
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import CurrentWorkout from '../modules/CurrentWorkout';
import WorkoutHistory from '../modules/WorkoutHistory';


const Router = observer(() => {
	const rootStore = useContext(RootStoreContext);
	return rootStore.routerStore.screen === 'WorkoutHistory' ? <WorkoutHistory />: <CurrentWorkout />;
})

export default Router;