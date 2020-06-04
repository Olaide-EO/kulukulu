import { createContext } from 'react';
import { observable } from 'mobx';
import { RootStore } from './RootStore';
import { persist } from 'mobx-persist';


type WorkoutDay = 'a' | 'b';


export interface CurrentExercise {

  weight: number;
  reps: number;
  numSets: number;
  exercise: string;
  sets: string[];

}

interface workoutHistory {
  [key: string]: CurrentExercise[];
}


export class WorkoutStore {
 rootStore: RootStore;
  constructor(rootStore: RootStore){
       this.rootStore = rootStore;
  }

  @persist @observable currentSquat: number;
  @persist @observable currentBenchPress: number;
  @persist @observable currentOverheadPress: number;
  @persist @observable currentDeadlift: number;
  @persist @observable currentBarbellRow: number;

  @persist @observable lastWorkOutType: WorkoutDay;
  
  @persist("list") @observable currentExercises: CurrentExercise[] = [];

  @persist("object") @observable history: workoutHistory = {};
}
