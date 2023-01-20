import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../shared/services/user-auth.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css'],
})
export class UserHeaderComponent implements OnInit {
  constructor(public userService: UserAuthService) {}
  ngOnInit(): void {}
}
