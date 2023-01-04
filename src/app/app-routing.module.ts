import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ListNormalUsersComponent } from './list-normal-users/list-normal-users.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-dashboard', pathMatch: 'full' },
  { path: 'home-dashboard', component: HomeDashboardComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'list-normal-user', component: ListNormalUsersComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
