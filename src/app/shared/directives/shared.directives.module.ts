import { NgModule } from '@angular/core';
import { ConditionSourceDirective } from './img.condition.directive';

const directives = [
  ConditionSourceDirective
];

@NgModule({
  exports: directives,
  declarations: directives,
})
export class SharedDirectivesModule { }
