import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

const modules = [
  MatButtonModule,
  MatTabsModule
];

@NgModule({
  imports: modules,
  exports: modules,
  declarations: [],
  providers: [],
})
export class MaterialModule { }
