import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuizSearchComponent } from './quiz-search/quiz-search.component';
import { QuizRoutes } from './quiz-routes';
import { DynamicQuizComponent } from './dynamic-quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizDashboardComponent } from './quiz-dashboard/quiz-dashboard.component';
import { QuizReviewComponent } from './quiz/quiz-review/quiz-review.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizTakeComponent } from './quiz/quiz-take/quiz-take.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(QuizRoutes)
  ],
  declarations: [
    DynamicQuizComponent,
    LoginComponent,
    QuizComponent,
    QuizTakeComponent,
    QuizReviewComponent,
    QuizSearchComponent,
    HeaderComponent,
    QuizDashboardComponent,
  ]
})
export class DynamicQuizModule { }
