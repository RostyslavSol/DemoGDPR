// Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SharedComponentsModule } from './shared/components/shared.components.module';
import { ViewsModule } from './views/views.module';
import { SharedDirectivesModule } from './shared/directives/shared.directives.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    // Custom modules
    AppRoutingModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
