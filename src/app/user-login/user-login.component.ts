import { Component, OnInit } from '@angular/core';
import { NormalUsers } from '../shared/services/normal-users';
import { UserAuthService } from '../shared/services/user-auth.service';
import * as crypto from 'crypto-js';
import { Router } from '@angular/router';
import { CONSTANTS } from '@firebase/util';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  foundUser: any;
  uemail: any;
  uPassword: any;
  loggedInNormalUser: any;
  constructor(public userService: UserAuthService, public router: Router) {}
  ngOnInit(): void {}
  login(userEmail, UserPassword) {
    this.foundUser = this.userService.getUserWithEmail(userEmail);
    this.foundUser.subscribe((users) => {
      if (users.length == 1) {
        for (let user of users) {
          this.uemail = user.UserEmail;
          this.uPassword = user.userPassword;
          const encryptedPassword = crypto
            .SHA512(UserPassword.toString())
            .toString();
          if (this.uemail == userEmail && this.uPassword == encryptedPassword) {
            this.loggedInNormalUser = user;
            console.log(this.loggedInNormalUser);
            this.userService.userServiceData = this.loggedInNormalUser;
            localStorage.setItem(
              'loggedInNormalUser',
              JSON.stringify(this.loggedInNormalUser)
            );
            JSON.parse(localStorage.getItem('loggedInNormalUser')!);
            this.router.navigate(['/user-dashboard']);
          } else {
            localStorage.setItem('loggedInNormalUser', 'null');
            JSON.parse(localStorage.getItem('loggedInNormalUser')!);
            alert('Incorrect UserEmail or Password');
          }
        }
      } else {
        alert('Email does not exist, Contact your manager');
      }
    });
  }
}
