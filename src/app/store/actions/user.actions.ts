import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD_USER = '[User] Set loading user';
export const USER_SUCCESS = '[User] Get user success';
export const USER_FAIL = '[User] Get user fail';

export class LoadUser implements Action {
  readonly type = LOAD_USER;
  constructor(public userId: string) {}
}

export class UserSuccess implements Action {
  readonly type = USER_SUCCESS;
  constructor(public user: User) {}
}

export class UserFail implements Action {
  readonly type = USER_FAIL;
  constructor(public payload: any){}
}

export type UserActions = LoadUser | UserSuccess | UserFail;
