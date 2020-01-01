import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ListComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ListComponent,
    UserComponent
  ]
})
export class UsersModule { }
