import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import * as fromActions from '../actions';
import { AppState } from '../app.reducer';


@Injectable({ providedIn: 'root' })
export class UsersEffects {

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private userService: UserService
  ) { }

  loadUsers$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromActions.LOAD_USERS),
      switchMap(() => this.userService.getUsers()
        .pipe(
          map((users) => this.store.dispatch(new fromActions.UsersSuccess(users))),
          catchError(error => {
            const objError = {
              url: error.url,
              message: error.message,
              name: error.name
            };

            return of(new fromActions.UsersFail(objError))
          })
        ))
     ), { dispatch: false })


}

