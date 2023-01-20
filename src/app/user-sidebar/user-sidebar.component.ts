import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../shared/services/user-auth.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css'],
})
export class UserSidebarComponent implements OnInit {
  constructor(public userService: UserAuthService) {}

  ngOnInit(): void {

  }
}
