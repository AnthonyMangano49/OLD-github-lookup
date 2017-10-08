import { Component, OnInit } from '@angular/core';
import { ChatbotSources, ChatbotMessage } from './shared/chatbot-utilities';
import { ChatbotService } from './shared/chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  input: string;
  conversationId: string;
  currentChat: Array<ChatbotMessage>;
  defaultMessage: ChatbotMessage;

  constructor(private chatbotService: ChatbotService) { }
  
  ngOnInit() {
    this.init();
  }

  init(){
    this.currentChat = [];
    this.defaultMessage = {
      source: 'bot',
      message: 'Welcome to chatbot, enter a message to get started...'
    };
    this.conversationId = '';
  }
  
  setMessageClass(source: string){
    return (source === 'user') ? 'user-message' : 'bot-message'; 
  }

  submitMessage() {
    if(this.input) {
      this.currentChat.push({source: 'user', message: this.input});
      
      this.chatbotService.sendMessage(this.input, this.conversationId)
        .subscribe(response => {
          this.conversationId = response.conversationId;
          this.currentChat.push(response);
        })
    }
    this.input = '';
  }

}
 
 

  



