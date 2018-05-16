import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { SectionDetailsComponent } from './section.details/section.details.component';
import { RouterModule } from '@angular/router';
import { SectionDetailsPanelComponent } from './section.details/components/panel/section.details.panel.component';
import { AnnouncementComponent } from './section.details/components/announcement/announcement.component';
import { InterviewComponent } from './interview/interview.component';
import { QuestionComponent } from './interview/components/question/question.component';
import { AnswersComponent } from './interview/components/answers/answers.component';
import { FormsModule } from '@angular/forms';

const components = [
  HomeComponent,
  DashboardComponent,
  SectionDetailsComponent,
  SectionDetailsPanelComponent,
  AnnouncementComponent,
  InterviewComponent,
  QuestionComponent,
  AnswersComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  exports: components,
  declarations: components,
  providers: [],
})
export class ViewsModule { }
