import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './users/list/list.component';
import { UserComponent } from './users/user/user.component';


const routes: Routes = [
  { path: 'user/list', component: ListComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'user/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
