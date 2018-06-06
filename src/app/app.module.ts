// Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { ApiFactoryService } from './core/services/api.factory/api.factory.service';
import { DashboardService } from './core/services/api.factory/delegates/dashboard.service';
import { SectionDetailsService } from './core/services/api.factory/delegates/details.service';
import { InterviewService } from './core/services/api.factory/delegates/interview.service';
import { ReportService } from './core/services/api.factory/delegates/report.service';

import { SharedComponentsModule } from './shared/components/shared.components.module';

import { ViewsModule } from './views/views.module';
import { APP_CONFIG, AppConfig } from './core/tokens/app.config';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AppStoreModule } from './core/redux/store.module';
import { SectionsResolver } from './core/resolvers/sections.resolver';
import { SectionDetailsResolver } from './core/resolvers/section.details.resolver';
import { QuestionResolver } from './core/resolvers/question.resolver';
import { ReportResolver } from './core/resolvers/report.resolver';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Custom modules
    AppRoutingModule,
    ViewsModule,
    SharedComponentsModule,
    AppStoreModule
  ],
  providers: [
    // Services
    ApiFactoryService,
    DashboardService,
    SectionDetailsService,
    InterviewService,
    ReportService,
    // Resolvers
    SectionsResolver,
    SectionDetailsResolver,
    QuestionResolver,
    ReportResolver,
    {
      provide: APP_CONFIG,
      useClass: AppConfig
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: environment.interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
