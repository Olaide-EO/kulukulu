import { RouterStoreContext } from "../store/RouterStore"
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import CurrentWorkout from '../modules/CurrentWorkout';
import WorkoutHistory from '../modules/WorkoutHistory';


const Router = observer(() => {
	const RouterStore = useContext(RouterStoreContext);
	return RouterStore.screen === 'WorkoutHistory' ? <WorkoutHistory />: <CurrentWorkout />;
})

export default Router;