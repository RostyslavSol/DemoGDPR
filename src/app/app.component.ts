import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  isHomePage = true;

  constructor(private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.checkIfHomePage(event);
      }
    });
  }

  public checkIfHomePage(event: RouterEvent): void {
    this.isHomePage = event.url.includes('home');
  }
}
