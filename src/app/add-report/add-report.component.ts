import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../shared/services/admin-auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css'],
})
export class AddReportComponent implements OnInit {
  showMsg = false;
  formReport = FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    public authService: AdminAuthService
  ) {}
  ngOnInit(): void {}
  onSubmit() {
    const reportData = this.authService.formReport.value;
    this.authService.createNewReport(reportData);
    this.showMsg = true;

    this.authService.formReport.reset();
  }
  onReset() {
    this.authService.formReport.reset();
  }
}
