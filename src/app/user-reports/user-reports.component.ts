import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../shared/services/user-auth.service';
import { ReportFields } from '../shared/services/report-fields';

@Component({
  selector: 'app-user-reports',
  templateUrl: './user-reports.component.html',
  styleUrls: ['./user-reports.component.css'],
})
export class UserReportsComponent implements OnInit {
  listReports: ReportFields[];
  constructor(public userService: UserAuthService) {}
  ngOnInit(): void {
    this.userService.getUserReports().subscribe((data) => {
      this.listReports = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as ReportFields),
        } as ReportFields;
      });
    });
  }
}
