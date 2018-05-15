import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeAnimations } from '../../effects/home.animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  animations: [
    HomeAnimations.slideUpQuestion(),
    HomeAnimations.showInfo(),
    HomeAnimations.slideDownBtn()
  ]
})

export class HomeComponent implements OnInit {
  constructor(private _router: Router) { }

  ngOnInit() { }

  public seeBoard(): void {
    this._router.navigate(['/dashboard']);
  }
}
