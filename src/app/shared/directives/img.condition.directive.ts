import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({ selector: '[if-src]' })
export class ConditionSourceDirective implements OnInit {
  @Input() flag:      boolean;
  @Input() trueSrc:   string;
  @Input() falseSrc:  string;

  constructor(private _elRef: ElementRef) {}

  ngOnInit() {
    const el = this._elRef.nativeElement as HTMLImageElement;
    el.src   = this.flag ? this.trueSrc : this.falseSrc;
  }
}
