import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const components = [
  HomeComponent,
  DashboardComponent
];

@NgModule({
  imports: [MaterialModule],
  exports: components,
  declarations: components,
  providers: [],
})
export class ViewsModule { }
