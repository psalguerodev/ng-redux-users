import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD_USERS = '[Users] Set loading users';
export const USERS_SUCCESS = '[Users] Get users success';
export const USERS_FAIL = '[Users] Get users fail';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class UsersSuccess implements Action {
  readonly type = USERS_SUCCESS;
  constructor(public users: User[]) {}
}

export class UsersFail implements Action {
  readonly type = USERS_FAIL;
  constructor(public payload: any){}
}

export type UsersActions = LoadUsers | UsersSuccess | UsersFail;
