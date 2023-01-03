import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../shared/services/admin-auth.service';

@Component({
  selector: 'app-ad-sidebar',
  templateUrl: './ad-sidebar.component.html',
  styleUrls: ['./ad-sidebar.component.css'],
})
export class AdSidebarComponent implements OnInit {
  constructor(public authService: AdminAuthService) {}
  ngOnInit(): void {}
}
