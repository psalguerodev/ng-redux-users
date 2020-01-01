import * as fromReducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  usersState: fromReducers.UsersState;
  userState: fromReducers.UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
  usersState: fromReducers.usersReducer,
  userState: fromReducers.userReducer
}
