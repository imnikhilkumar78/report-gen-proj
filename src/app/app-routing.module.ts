import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ListNormalUsersComponent } from './list-normal-users/list-normal-users.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AddNormalUserComponent } from './add-normal-user/add-normal-user.component';
import { AddReportComponent } from './add-report/add-report.component';
import { ViewReportComponent } from './view-report/view-report.component';
//guard
import { AuthGuard } from './shared/guard/auth.guard';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-dashboard', pathMatch: 'full' },
  { path: 'home-dashboard', component: HomeDashboardComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'user-login', component: UserLoginComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'list-normal-user',
    component: ListNormalUsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'forget-password',
    component: ForgotPasswordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-normal-user',
    component: AddNormalUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-report',
    component: AddReportComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'view-report',
    component: ViewReportComponent,
    canActivate: [AuthGuard],
  },
  { path: 'user-dashboard', component: UserDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
