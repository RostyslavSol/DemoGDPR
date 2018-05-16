import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../../models/interview/question.model';

@Component({
  selector: 'app-interview',
  templateUrl: 'interview.component.html'
})

export class InterviewComponent implements OnInit {
  question: IQuestion;

  constructor() { }

  ngOnInit() {
    this.question = {
      title: `Consent must be unambiguous. This means customers need to easily understand what they
      are signing up for. Is there any doubt in your statements?`,
      invalidExample: {
        title: 'Examples of invalid consent:',
        list: ['Click to accept', 'I agree']
      },
      validExample: {
        title: 'Examples of valid consent:',
        list: [
          'I would like to receive emails from [Brand name]',
          'Sign me up for email communications',
          'I understand and agree to the email marketing terms & conditions'
        ]
      },
      info: 'For information, please, visit the references from reference section',
      answers: [
        {
          code: '1',
          text: 'Statements on the consent form of my organization are clear, precise and similar to ones from the valid example'
        },
        {
          code: '2',
          text: 'Statements on the consent form of my organization are more similar to the ones on the invalid example'
        },
        {
          code: '3',
          text: 'I am not sure about the answer'
        }
      ],
      references: [
        {
          title: 'Article 6 EU GDPR "Lawfulness of processing"',
          link: 'https://gdpr-info.eu/art-6-gdpr/'
        },
        {
          title: 'Article 7 EU GDPR "Conditions for consent"',
          link: 'https://gdpr-info.eu/art-7-gdpr/'
        }
      ]
    }
  }
}
