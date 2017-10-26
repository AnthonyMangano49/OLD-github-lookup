import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizReviewComponent } from './quiz-review/quiz-review.component';
import { QuizSearchComponent } from './quiz-search/quiz-search.component';
import { QuizRoutes } from './quiz-routes';
import { DynamicQuizComponent } from './dynamic-quiz.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(QuizRoutes)
  ],
  declarations: [
    DynamicQuizComponent,
    LoginComponent,
    QuizComponent,
    QuizReviewComponent,
    QuizSearchComponent
  ]
})
export class DynamicQuizModule { }
