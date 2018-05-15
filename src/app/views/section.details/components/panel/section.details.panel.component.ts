import { Component, OnInit, Input } from '@angular/core';
import { IOverviewItem } from '../../../../models/section.details/overview.model';

@Component({
  selector: 'section-details-panel',
  templateUrl: 'section.details.panel.component.html'
})

export class SectionDetailsPanelComponent implements OnInit {
  @Input() overview: IOverviewItem[];

  constructor() { }

  ngOnInit() { }
}
