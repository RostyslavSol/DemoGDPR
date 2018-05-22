import { Component, OnInit } from '@angular/core';
import { IReport } from '../../models/report/report.model';

@Component({
  selector: 'report',
  templateUrl: 'report.component.html'
})
export class ReportComponent implements OnInit {
  report: IReport;

  constructor() { }

  ngOnInit() {
    this.report = {
      sectionId: '',
      summary: [
        { isSuccess: true,  text: 'Your organization has legal bases for personal data processing: consent' },
        { isSuccess: false, text: 'Your consent form is compliant with GDPR requirements' },
        { isSuccess: true,  text: 'Your cookie policy is not conforming regulation requirements' }
      ]
    };
  }

}
