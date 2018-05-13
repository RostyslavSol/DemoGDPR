import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';


const components = [
  HeaderComponent,
  LoaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: components,
  declarations: components,
  providers: [],
})
export class SharedComponentsModule { }
