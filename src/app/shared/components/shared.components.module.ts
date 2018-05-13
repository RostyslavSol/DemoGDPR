import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';

const components = [
  HeaderComponent
];

@NgModule({
  imports: [],
  exports: components,
  declarations: components,
  providers: [],
})
export class SharedComponentsModule { }
