import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionResolver } from './core/resolvers/question.resolver';
import { ReportResolver } from './core/resolvers/report.resolver';
import { SectionDetailsResolver } from './core/resolvers/section.details.resolver';
import { SectionsResolver } from './core/resolvers/sections.resolver';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { InterviewComponent } from './views/interview/interview.component';
import { ReportComponent } from './views/report/report.component';
import { SectionDetailsComponent } from './views/section.details/section.details.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: {
      sections: SectionsResolver
    }
  },
  {
    path: 'details/:sectionId',
    component: SectionDetailsComponent,
    resolve: {
      sectionDetails: SectionDetailsResolver
    }
  },
  {
    path: 'interview/:sectionId/:questionId',
    component: InterviewComponent,
    resolve: {
      question: QuestionResolver
    }
  },
  {
    path: 'report/:sectionId',
    component: ReportComponent,
    resolve: {
      report: ReportResolver
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
