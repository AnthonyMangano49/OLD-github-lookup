import { DynamicQuizComponent } from "./dynamic-quiz.component";
import { LoginComponent } from "./login/login.component";
import { QuizComponent } from "./quiz/quiz.component";
import { QuizReviewComponent } from "./quiz-review/quiz-review.component";
import { QuizSearchComponent } from "./quiz-search/quiz-search.component";

export const QuizRoutes = [
    {
        path: '', 
        component: DynamicQuizComponent,
        children: [
            {
                path:'',
                redirectTo: 'login',
                pathMatch: 'full' 
            }, {
                path: 'login',
                component: LoginComponent,
            }, {
                path: 'search',
                component: QuizSearchComponent,
            }, {
                path: 'take/:name',
                component: QuizComponent,
            }, {
                path: 'review',
                component: QuizReviewComponent
            }, {
                path:'**',
                redirectTo: 'review'
            },   
        ]
    }
]