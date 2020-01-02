import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD_USERNEW = '[User] Set loading user';
export const USERNEW_SUCCESS = '[User] Get user success';
export const USERNEW_FAIL = '[User] Get user fail';

export const loadUser = createAction(LOAD_USERNEW, props<{ userId: string }>());
export const userSuccess = createAction(USERNEW_SUCCESS, props<{ user: User }>());
export const userFail = createAction(USERNEW_FAIL, props<{ payload: any }>());
