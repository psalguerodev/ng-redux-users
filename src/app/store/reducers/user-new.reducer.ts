import * as fromActions from '../actions';
import { createReducer, on } from '@ngrx/store';
import { UserState } from '.';

const initUser: UserState =
{
  user: null,
  loading: false,
  loaded: false,
  error: null
};

export const userNewReducer = createReducer(
  initUser,
  on(fromActions.loadUser, state =>
    ({ ...state, loading: true, error: null })),
  on(fromActions.userSuccess, (state, action) =>
    ({ ...state, user: { ...action.user }, loading: false, loaded: true })),
  on(fromActions.userFail, (state, action) =>
    ({ ...state, error: action.payload, loaded: false, loading: false, user: null })),
);
