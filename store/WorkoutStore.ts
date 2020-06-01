import { createContext } from 'react';
import { observable } from 'mobx';
import { RootStore } from './RootStore';

type WorkoutDay = 'a' | 'b';

interface workoutHistory {
	[key: string]: Array<{
		excercises: string,
		value: number
	}>
}

/*
{
	'02-18-2019': [
    {
	excercise: 'squat',
	value: 90
    },
    {
	excercise: 'benchpress',
	value: 100
    }
	]
}
*/

interface CurrentExercise {

  weight: number;
  reps: number;
  numSets: number;
  exercise: string;
  sets: string[];

}


export class WorkoutStore {
 rootStore: RootStore;
  constructor(rootStore: RootStore){
       this.rootStore = rootStore;
  }

  @observable currentSquat: number;
  @observable currentBenchPress: number;
  @observable currentOverheadPress: number;
  @observable currentDeadlift: number;
  @observable currentBarbellRow: number;

  @observable lastWorkOutType: WorkoutDay;
  
  @observable currentExercises: CurrentExercise[] = [];

  @observable history: workoutHistory
}
