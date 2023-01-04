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

const routes: Routes = [
  { path: '', redirectTo: '/home-dashboard', pathMatch: 'full' },
  { path: 'home-dashboard', component: HomeDashboardComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'list-normal-user', component: ListNormalUsersComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'forget-password', component: ForgotPasswordComponent },
  { path: 'add-normal-user', component: AddNormalUserComponent },
  { path: 'add-report', component: AddReportComponent },
  { path: 'view-report', component: ViewReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
