import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

const components = [
  HomeComponent
];

@NgModule({
  imports: [],
  exports: components,
  declarations: components,
  providers: [],
})
export class ViewsModule { }
