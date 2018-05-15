import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
  isHomePage: boolean;

  @Input('isHomePage') set checkHomePage(flag: boolean) {
    this.isHomePage = flag;
    this.ngOnInit();
  }

  title = 'RCA - Regulation Compliance Assessment System';

  private _visibleTitle = false;
  private _visibleLinks = false;

  constructor() { }

  ngOnInit() {
    if (this.isHomePage) {
      this.showTitle(true);
    } else {
      this.showLinks(true);
    }
  }

  get isTitleVisible(): boolean {
    return this._visibleTitle;
  }

  get isLinksVisible(): boolean {
    return this._visibleLinks;
  }

  public showTitle(flag: boolean) {
    this._visibleTitle = flag;
    this._visibleLinks = !flag;
  }

  public showLinks(flag: boolean) {
    this.showTitle(!flag);
  }
}
