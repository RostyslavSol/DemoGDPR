import { Component, OnInit } from '@angular/core';
import { ISectionModel } from '../../models/dashboard/section.model';
import { DashboardHelper } from './dashboard.helper';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  sections: ISectionModel[];

  constructor() { }

  ngOnInit() {
    const helper = new DashboardHelper();

    this.sections = helper.titles.map((x, index) => ({
      title:        helper.titles[index],
      text:         helper.texts[index],
      redirectUrl:  '/details',
      svgUrl:       helper.svgUrls[index]
    }));
  }

}
