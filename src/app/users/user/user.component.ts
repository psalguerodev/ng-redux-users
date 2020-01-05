import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { User } from '../../models/user.model';
import { UserState } from '../../store/reducers/user.reducer';
import * as fromActions from '../../store/actions';
import { UserFacade } from '../../store/facades/user.facade';

@Component({
  selector: 'psalguerodev-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit, OnDestroy {

  user: User;
  loading: boolean;
  error: any;
  userSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userFacade: UserFacade) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: { id: string }) => {
      if (params) this.userFacade.dispatchLoadUser(params.id);
    });

    this.userFacade.userState$
      .subscribe((state: UserState) => {
        this.user = state.user;
        this.loading = state.loading;
        this.error = state.error;
      });
  }

  ngOnDestroy() {
    if (this.userSubscription) this.userSubscription.unsubscribe();
  }

}
