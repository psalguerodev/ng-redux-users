import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import * as fromActions from '../actions';

@Injectable({providedIn: 'root'})
export class UserNewEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

  loadUser$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromActions.LOAD_USER),
      mergeMap((action: fromActions.LoadUser) => this.userService.getUserById(action.userId)
        .pipe(
          map((user) => new fromActions.UserSuccess(user)),
          catchError(error => {
            const objError = {
              url: error.url,
              message: error.message,
              name: error.name
            };

            return of(new fromActions.UserFail(objError))
          })
        ))
    ));

}