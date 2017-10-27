import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizSearchComponent } from './quiz-search/quiz-search.component';
import { QuizRoutes } from './quiz-routes';
import { DynamicQuizComponent } from './dynamic-quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizDashboardComponent } from './quiz-dashboard/quiz-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(QuizRoutes)
  ],
  declarations: [
    DynamicQuizComponent,
    LoginComponent,
    QuizComponent,
    QuizSearchComponent,
    HeaderComponent,
    QuizDashboardComponent
  ]
})
export class DynamicQuizModule { }
