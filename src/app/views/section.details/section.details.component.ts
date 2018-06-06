import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../core/redux';
import * as fromSectionDetails from '../../core/redux/reducers/section.details.reducers';
import { IAnnouncement } from '../../models/section.details/announcement.model';
import { IOverviewItem } from '../../models/section.details/overview.model';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ISectionDetails } from '../../models/section.details/section.details.model';

@Component({
  selector: 'app-section-details',
  templateUrl: 'section.details.component.html'
})

export class SectionDetailsComponent implements OnInit {
  sectionDetails$: Observable<ISectionDetails>;

  constructor(
    private _store: Store<State>
  ) { }

  ngOnInit() {
    this.sectionDetails$ = this._store.select(fromSectionDetails.sectionDetailsSelector);
  }
}
