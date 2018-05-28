import { Component, OnInit } from '@angular/core';
import { ISection } from '../../models/dashboard/section.model';
import { Observable } from 'rxjs';
import { ApiFactoryService } from '../../core/services/api.factory/api.factory.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  sections$: Observable<ISection[]>;

  constructor(
    private _apiService: ApiFactoryService
  ) { }

  ngOnInit() {
    this.sections$ = this._apiService.getSections();
  }

}
