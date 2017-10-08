import { Component, OnInit } from '@angular/core';
import { ChatbotSources, ChatbotMessage } from './shared/chatbot-utilities';
import { ChatbotService } from './shared/chatbot.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  input: string;
  conversationId: string;
  currentChat: Array<ChatbotMessage>;
  sendMessage = new Subject<string>();
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

    this.sendMessage
      .debounceTime(1000)
      .subscribe(input => {
        this.chatbotService.sendMessage(input, this.conversationId)
        .subscribe( response => {
          this.conversationId = response.conversationId;
          this.currentChat.push(response);
        })
      })
  }
  
  setMessageClass(source: string){
    return (source === 'user') ? 'user-message' : 'bot-message'; 
  }

  submitMessage() {
    let input = this.input.trim();
    if(input) {
      this.currentChat.push({source: 'user', message: input});
      this.sendMessage.next(input);
    }
    this.input = '';
  }

}
 
 

  



