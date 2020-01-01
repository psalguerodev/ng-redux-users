import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { LoadUsers } from '../../store/actions/users.actions';

@Component({
  selector: 'psalguerodev-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [UserService]
})
export class ListComponent implements OnInit, OnDestroy {

  users: Array<User> = [];
  error: any;
  userSubscription: Subscription;
  loading: boolean;

  constructor(
    private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadUsers());
    this.userSubscription = this.store.select('usersState')
      .subscribe((userState) => {
        this.users = userState.users;
        this.loading = userState.loading;
        this.error = userState.error;
      });
  }

  ngOnDestroy() {
    if (this.userSubscription) this.userSubscription.unsubscribe();
  }

}
