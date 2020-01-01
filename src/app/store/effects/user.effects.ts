import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import * as fromActions from '../actions';
import { AppState } from '../app.reducer';

@Injectable({ providedIn: 'root' })
export class UserEffects {

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private userService: UserService
  ) { }

  loadUser$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromActions.LOAD_USER),
      tap( (action) => console.log(action) ),
      switchMap((action: fromActions.LoadUser) => this.userService.getUserById(action.userId)
        .pipe(
          map((user) => this.store.dispatch(new fromActions.UserSuccess(user))),
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

