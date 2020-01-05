import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromActions from '../actions';
import { AppState } from '../app.reducer';
import { selectUserState } from '../selectors/user.selectors';


@Injectable({
  providedIn: 'root'
})
export class UserFacade {

  userState$ = this.store.select(selectUserState);

  constructor(
    private store:Store<AppState>
  ) { }

  dispatchLoadUser(userId: string): void {
    this.store.dispatch(fromActions.loadUser( { userId: userId }));
  }
}
