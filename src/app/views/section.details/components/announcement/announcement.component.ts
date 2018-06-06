import { Component, OnInit, Input } from '@angular/core';
import { IAnnouncement } from '../../../../models/section.details/announcement.model';
import { Router } from '@angular/router';

@Component({
  selector: 'announcement',
  templateUrl: 'announcement.component.html'
})

export class AnnouncementComponent implements OnInit {
  @Input() sectionId: number;
  @Input() announcement: IAnnouncement;

  constructor(private _router: Router) { }

  ngOnInit() { }

  startInterview() {
    this._router.navigate([`/interview/${this.sectionId}/1`]);
  }
}
