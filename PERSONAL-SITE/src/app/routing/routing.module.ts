import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../main/main-layout/main-layout.component';
import { ChatbotComponent } from '../chatbot/chatbot.component';

const Routes: Routes = [
    {
        path: 'main',
        component: MainLayoutComponent
    }, {
        path: 'chat',
        component: ChatbotComponent
    }, { 
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }, 
    // { 
    //   path: '**', 
    //  component: PageNotFound
    // }
]

@NgModule({
    imports: [
        RouterModule.forRoot(Routes)
    ],
    exports: [RouterModule]
})

export class RoutingModule {}