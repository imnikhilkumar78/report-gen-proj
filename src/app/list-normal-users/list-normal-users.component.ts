import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../shared/services/admin-auth.service';
import { NormalUsers } from '../shared/services/normal-users';
import { User } from '../shared/services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-normal-users',
  templateUrl: './list-normal-users.component.html',
  styleUrls: ['./list-normal-users.component.css'],
})
export class ListNormalUsersComponent implements OnInit {
  listNormalUsers: NormalUsers[];
  constructor(public authService: AdminAuthService, public router: Router) {}
  ngOnInit(): void {
    this.authService.getUserList().subscribe((data) => {
      this.listNormalUsers = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as NormalUsers),
        } as NormalUsers;
      });
    });
  }
  getUserId(uid: string) {
    this.authService.getUserId(uid);
  }
}
