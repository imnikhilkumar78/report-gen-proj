import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FooterComponent } from './footer/footer.component';

//Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from '../environments/environment';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdSidebarComponent } from './ad-sidebar/ad-sidebar.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ListNormalUsersComponent } from './list-normal-users/list-normal-users.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    HeaderComponent,
    AdminLoginComponent,
    UserLoginComponent,
    FooterComponent,
    AdminDashboardComponent,
    AdSidebarComponent,
    VerifyEmailComponent,
    ListNormalUsersComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFirestoreModule,
    ],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
