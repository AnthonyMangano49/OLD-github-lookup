import { Routes } from "@angular/router";
import { MainLayoutComponent } from "../main/main-layout/main-layout.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }, {
        path: 'main',
        component: MainLayoutComponent
    }, {
        path: 'chat',
        loadChildren: '../chatbot/chatbot.module#ChatbotModule'
    }, {
        path: 'garage',
        loadChildren: '../garage/garage.module#GarageModule'
    }, { 
      path: '**', 
      redirectTo: 'main'
    //   component: PageNotFound
    }
]