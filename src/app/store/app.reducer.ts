import { ActionReducerMap } from '@ngrx/store';
import * as fromReducers from './reducers';

export interface AppState {
  usersState: fromReducers.UsersState;
  userState: fromReducers.UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
  usersState: fromReducers.usersReducer,
  userState: fromReducers.userNewReducer
}
