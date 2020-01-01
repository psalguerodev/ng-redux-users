import { User } from '../../models/user.model';
import * as fromActions from '../actions';

export interface UsersState {
  loading: boolean;
  loaded: boolean;
  users: User[];
  error: any;
}

const initUser: UsersState =
{
  users: [],
  loading: false,
  loaded: false,
  error: null
};

export function usersReducer(state = initUser, action: fromActions.UsersActions): UsersState {

  switch (action.type) {

    case fromActions.LOAD_USERS:
      return { ...state, loading: true, error: null };

    case fromActions.USERS_SUCCESS:
      return { ...state, users: [...action.users], loading: false, loaded: true };

    case fromActions.USERS_FAIL:
      return { ...state, error: action.payload, loaded: false, loading: false, users: []};

    default:
      return state;
  }

}
