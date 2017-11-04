import { DynamicQuizComponent } from "./dynamic-quiz.component";
import { LoginComponent } from "./login/login.component";
import { QuizSearchComponent } from "./quiz-search/quiz-search.component";
import { AuthGuardService } from "./authentication/auth-guard.service";
import { QuizDashboardComponent } from "./quiz-dashboard/quiz-dashboard.component";
import { QuizReviewComponent } from "./quiz/quiz-review/quiz-review.component";
import { QuizComponent } from "./quiz/quiz.component";

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
                //authguard if already logged in direct to dash
            }, {
                path: 'dashboard',
                component: QuizDashboardComponent,
                // canActivate: [AuthGuardService]
            }, {
                path: 'search',
                component: QuizSearchComponent,
                // canActivate: [AuthGuardService]
            }, {
                path: 'take/:name',
                component: QuizComponent,
                // canActivate: [AuthGuardService]
            }, {
                path:'**',
                redirectTo: 'dashboard'
            },   
        ]
    }
]