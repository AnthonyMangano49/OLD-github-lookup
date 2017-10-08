import { Injectable } from '@angular/core';
import { ApiCall } from './chatbot-config';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ChatbotMessage } from './chatbot-utilities';

@Injectable()
export class ChatbotService {
  apiCall: string;
  constructor(private http: Http) {
    this.apiCall = ApiCall;
  }

  sendMessage(input: string, conversationId?: string): Observable<ChatbotMessage>{
    let sendCall = `${this.apiCall}&input=${input}`;
    let returnMessage: ChatbotMessage;
    if(conversationId)
      sendCall += `&cs=${conversationId}`; 

    return this.http
      .get(sendCall)
      .map(response => {
        let message = response.json();
        return returnMessage = {
          source: 'bot',
          message: message.output,
          conversationId: message.cs
        }
      })
  }

}
