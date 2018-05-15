import { Component, OnInit } from '@angular/core';
import { IAnnouncement } from '../../models/section.details/announcement.model';
import { IOverviewItem } from '../../models/section.details/overview.model';

@Component({
  selector: 'app-section-details',
  templateUrl: 'section.details.component.html'
})

export class SectionDetailsComponent implements OnInit {
  announcement: IAnnouncement;
  overview: IOverviewItem[];

  constructor() { }

  ngOnInit() {
    this.announcement = {
      title: 'Lawfulness of Personal Data  Processing',
      info: 'Assess lawfulness of personal data processing according to articles of General Data Protection Regulation:',
      list: [
        'Article 6 EU GDPR "Lawfulness of processing"',
        'Article 7 EU GDPR "Conditions for consent"',
        'Article 8 EU GDPR "Conditions applicable to child\'s consent in relation to information society services"'
      ]
    };

    this.overview = [
      {
        title: 'WHAT WILL BE ASKED',
        text: 'You will be asked questions related to the professional activity of your organization. There is an option to let the system know if you don’t know the answer on the question. References and additional help to answer the questions will be provided.'
      },
      {
        title: 'WOULD THIS INFORMATION BE EXPOSED',
        text: 'The interview is fully anonymous and the answers are not stored in the system unless you are the authenticated user and directly command the system to save your interview.'
      }
    ];
  }
}
