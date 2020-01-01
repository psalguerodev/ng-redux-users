import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import * as fromActions from '../actions';


@Injectable({ providedIn: 'root' })
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

  loadUsers$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromActions.LOAD_USERS),
      switchMap(() => this.userService.getUsers()
        .pipe(
          map((users) => new fromActions.UsersSuccess(users)),
          catchError(error => {
            const objError = {
              url: error.url,
              message: error.message,
              name: error.name
            };

            return of(new fromActions.UsersFail(objError))
          })
        ))
    ));


}

