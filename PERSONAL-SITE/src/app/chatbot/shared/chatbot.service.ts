import { Injectable } from '@angular/core';
import { ApiCall } from './chatbot-config';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { ChatbotMessage } from './chatbot-utilities';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

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
      .catch((error) => {
        console.error(error)
        return Observable.of(returnMessage = {
          source: 'bot',
          message: 'Chatbot down for maintenance, come back soon...',
        });
      })
    }

}
