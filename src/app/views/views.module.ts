import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material.module';

const components = [
  HomeComponent
];

@NgModule({
  imports: [MaterialModule],
  exports: components,
  declarations: components,
  providers: [],
})
export class ViewsModule { }
