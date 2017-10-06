import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import { GarageComponent } from './garage.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: GarageComponent}
        ])
    ], 
    declarations: [GarageComponent]
})

export class GarageModule { }