import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from './chatbot.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ChatbotComponent }
    ])
  ],
  declarations: [ChatbotComponent]
})
export class ChatbotModule { }
