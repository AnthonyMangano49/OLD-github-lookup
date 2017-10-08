import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { ChatbotComponent } from './chatbot.component';
import { RouterModule } from '@angular/router';
import { ChatbotService } from './shared/chatbot.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([
      {path: '', component: ChatbotComponent }
    ])
  ],
  declarations: [ChatbotComponent],
  providers: [ChatbotService]
})
export class ChatbotModule { }
