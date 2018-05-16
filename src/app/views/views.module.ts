import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AnswersComponent } from './interview/components/answers/answers.component';
import { QuestionComponent } from './interview/components/question/question.component';
import { ReferencesComponent } from './interview/components/references/references.component';
import { InterviewComponent } from './interview/interview.component';
import { AnnouncementComponent } from './section.details/components/announcement/announcement.component';
import { SectionDetailsPanelComponent } from './section.details/components/panel/section.details.panel.component';
import { SectionDetailsComponent } from './section.details/section.details.component';

const components = [
  HomeComponent,
  DashboardComponent,
  SectionDetailsComponent,
  SectionDetailsPanelComponent,
  AnnouncementComponent,
  InterviewComponent,
  QuestionComponent,
  AnswersComponent,
  ReferencesComponent
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
