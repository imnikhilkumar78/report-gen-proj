import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../shared/services/admin-auth.service';
import { NormalUsers } from '../shared/services/normal-users';
import { UserAuthService } from '../shared/services/user-auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as crypto from 'crypto-js';
@Component({
  selector: 'app-add-normal-user',
  templateUrl: './add-normal-user.component.html',
  styleUrls: ['./add-normal-user.component.css'],
})
export class AddNormalUserComponent implements OnInit {
  form: FormGroup;
  showMsg = false;
  foundUser: any;

  constructor(
    private readonly fb: FormBuilder,
    public authService: AdminAuthService,
    private userService: UserAuthService
  ) {}
  ngOnInit(): void {}
  onSubmit() {
    const userData = this.authService.form.value;
    this.foundUser = this.userService.getUserWithEmail(
      userData.UserEmail.toString()
    );
    this.foundUser.subscribe((users) => {
      if (users.length == 0) {
        const encryptedPassword = crypto
          .SHA512(userData.userPassword)
          .toString();
        userData.userPassword = encryptedPassword;
        this.authService.createNewUser(userData);
        this.showMsg = true;
        this.authService.form.reset();
      } else {
        alert('User with this Email already Exists!!');
        this.authService.form.reset();
      }
    });
  }
}
