import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../shared/services/admin-auth.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  constructor(public authService: AdminAuthService) {}
  ngOnInit(): void {}
}
