import { Component, OnInit, Input } from '@angular/core';
import { IAnnouncement } from '../../../../models/section.details/announcement.model';

@Component({
  selector: 'announcement',
  templateUrl: 'announcement.component.html'
})

export class AnnouncementComponent implements OnInit {
  @Input() announcement: IAnnouncement;

  constructor() { }

  ngOnInit() { }
}
