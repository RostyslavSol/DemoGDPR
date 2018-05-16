import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';

const modules = [
  MatButtonModule,
  MatTabsModule,
  MatRadioModule
];

@NgModule({
  imports: modules,
  exports: modules,
  declarations: [],
  providers: [],
})
export class MaterialModule { }
