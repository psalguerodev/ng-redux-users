import { User } from '../../models/user.model';
import * as fromActions from '../actions';

export interface UserState {
  loading: boolean;
  loaded: boolean;
  user: User;
  error: any;
}

const initUser: UserState =
{
  user: null,
  loading: false,
  loaded: false,
  error: null
};

export function userReducer(state = initUser, action: fromActions.UserActions): UserState {

  switch (action.type) {

    case fromActions.LOAD_USER:
      return { ...state, loading: true, error: null };

    case fromActions.USER_SUCCESS:
      return { ...state, user: { ...action.user }, loading: false, loaded: true };

    case fromActions.USER_FAIL:
      return { ...state, error: action.payload, loaded: false, loading: false, user: null};

    default:
      return state;
  }

}
