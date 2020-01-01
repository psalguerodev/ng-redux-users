import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { ActivatedRoute } from '@angular/router';
import { LoadUser } from '../../store/actions/user.actions';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { UserState } from '../../store/reducers/user.reducer';

@Component({
  selector: 'psalguerodev-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  user: User;
  loading: boolean;
  userSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: { id: string }) => {
      if (params) this.store.dispatch(new LoadUser(params.id))
    });

    this.store.select('userState')
      .subscribe((state: UserState) => {
        this.user = state.user;
        this.loading = state.loading;
      });
  }

  ngOnDestroy() {
    if (this.userSubscription) this.userSubscription.unsubscribe();
  }

}
