import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { UserState } from '../reducers/user.reducer';

export const selectUserState = createSelector(
  (state: AppState) => state.userState,
  (userState: UserState) => userState
);
