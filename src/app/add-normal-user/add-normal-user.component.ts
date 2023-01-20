import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminAuthService } from '../shared/services/admin-auth.service';
import { NormalUsers } from '../shared/services/normal-users';
import { UserAuthService } from '../shared/services/user-auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as crypto from 'crypto-js';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-normal-user',
  templateUrl: './add-normal-user.component.html',
  styleUrls: ['./add-normal-user.component.css'],
})
export class AddNormalUserComponent implements OnInit {
  form: FormGroup;
  showMsg = false;
  foundUser: any;
  numberOfUserFound: any;
  obs: Subscription;

  constructor(
    private readonly fb: FormBuilder,
    public authService: AdminAuthService,
    private userService: UserAuthService
  ) {}
  ngOnInit(): void {}
  async onSubmit() {
    const userData = this.authService.form.value;
    this.foundUser = this.userService.getUserWithEmail(
      userData.UserEmail.toString()
    );
    this.obs = await this.foundUser.subscribe((users) => {
      this.numberOfUserFound = users.length;
      if (this.numberOfUserFound >= 1) {
        alert('Already User Exists with this email');
        this.authService.form.reset();
      } else {
        const encryptedPassword = crypto
          .SHA512(userData.userPassword)
          .toString();
        userData.userPassword = encryptedPassword;
        this.authService.createNewUser(userData);
        this.showMsg = true;
        alert('User Added Successfully');
        this.authService.form.reset();
        this.obs.unsubscribe();
      }
    });
  }
}
