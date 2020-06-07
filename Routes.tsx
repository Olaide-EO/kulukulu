import { RootStoreContext } from "./store/RootStore"
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import CurrentWorkout from './modules/CurrentWorkout';
import WorkoutHistory from './modules/WorkoutHistory';
import { Router, Switch, Route } from "./Router/index.web";

const Routes = () => {
	
	return (
        <Router>
        	<Switch>
               <Route exact path="/" component={WorkoutHistory} />
               <Route exact path="/current-workout" component={CurrentWorkout} />
                <Route exact path="/workout/:year/:month/:day" component={CurrentWorkout} />
        	</Switch>

        </Router>
		);
}

export default Routes;