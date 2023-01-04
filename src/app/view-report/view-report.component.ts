import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../shared/services/admin-auth.service';
import { ReportFields } from '../shared/services/report-fields';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css'],
})
export class ViewReportComponent implements OnInit {
  listReports: ReportFields[];
  constructor(public authService: AdminAuthService) {}
  ngOnInit(): void {
    this.authService.getUserReports().subscribe((data) => {
      this.listReports = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as ReportFields),
        } as ReportFields;
      });
    });
  }
}
