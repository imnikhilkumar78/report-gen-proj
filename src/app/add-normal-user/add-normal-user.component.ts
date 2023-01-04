import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../shared/services/admin-auth.service';
import { NormalUsers } from '../shared/services/normal-users';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-normal-user',
  templateUrl: './add-normal-user.component.html',
  styleUrls: ['./add-normal-user.component.css'],
})
export class AddNormalUserComponent implements OnInit {
  form: FormGroup;
  showMsg = false;

  constructor(
    private readonly fb: FormBuilder,
    public authService: AdminAuthService
  ) {}
  ngOnInit(): void {}
  onSubmit() {
    const userData = this.authService.form.value;
    this.authService.createNewUser(userData);
    this.showMsg = true;

    this.authService.form.reset();
  }
}
