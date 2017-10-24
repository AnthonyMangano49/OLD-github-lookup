import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicQuizComponent } from './dynamic-quiz.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: DynamicQuizComponent}])
  ],
  declarations: [DynamicQuizComponent]
})
export class DynamicQuizModule { }
