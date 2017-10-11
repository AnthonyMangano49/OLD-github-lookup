import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../main/main-layout/main-layout.component';
import { routes } from './routes';


@NgModule({
    imports: [
        RouterModule.forRoot(routes,  { useHash: true })
    ],
    exports: [RouterModule]
})

export class RoutingModule {}