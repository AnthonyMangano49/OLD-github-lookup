import { Routes } from "@angular/router";
import { LayoutComponent } from "../main/layout/layout.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }, {
        path: 'main',
        component: LayoutComponent
    }, {
        path: 'chat',
        loadChildren: '../chatbot/chatbot.module#ChatbotModule'
    }, 
    {
        path: 'quiz',
        loadChildren: '../dynamic-quiz/dynamic-quiz.module#DynamicQuizModule'
    },
     { 
      path: '**', 
      redirectTo: 'main'
    //   component: PageNotFound
    }
]