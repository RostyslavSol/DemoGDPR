import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loader',
  styles: [
    `
      i.fa.fa-spinner.fa-spin {
        z-index: 9999;
        position: absolute;
        top: 45vh;
        left: 45vw;
        font-size: 7vw;
      }
    `
  ],
  template:
  `
    <i class="fa fa-spinner fa-spin"></i>
  `
})

export class LoaderComponent implements OnInit {
  isVisible = false;
  isVisibleChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }
}
