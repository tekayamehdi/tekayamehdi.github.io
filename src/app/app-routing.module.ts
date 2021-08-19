import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';


import { AgGridModule } from 'ag-grid-angular';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) ,
    AgGridModule.withComponents([])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
