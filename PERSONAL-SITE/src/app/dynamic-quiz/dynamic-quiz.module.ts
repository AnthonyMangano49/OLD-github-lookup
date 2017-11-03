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
import { UsersService } from './authentication/users.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(QuizRoutes),
    FormsModule,
    HttpClientModule
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
  ],
  providers: [UsersService]
})
export class DynamicQuizModule { }
