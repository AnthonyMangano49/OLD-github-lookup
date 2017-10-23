import { TestBed, inject } from '@angular/core/testing';
import { ChatbotMessage } from './chatbot-utilities';
import { ChatbotService } from './chatbot.service';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { ApiCall } from './chatbot-config';
import { fakeAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';

describe('ChatbotService', () => {
  let service: ChatbotService;
  let http;

  beforeEach(() => {
    http = { get: ()=>Observable.of('')};
    service = new ChatbotService(http as Http)
  });

  it('inits', () => {
    expect(service).toBeTruthy();
    expect(service.apiCall).toBe(ApiCall);
  })

  describe('send message', () => {
    describe('success', () => {
      let spy;
      
      let fullMessage: ChatbotMessage = {
        source: 'bot',
        message: 'good stuff',
        conversationId: '1'
      };

      beforeEach(() => {
        spy = spyOn(http, 'get').and.returnValue(Observable.of({json: ()=> {
          return {
            output: 'good stuff',
            cs: '1'
          }
        }}));
      })

      it('sends with input appended', () => {
        service.sendMessage('input');
        expect(spy).toHaveBeenCalledWith(service.apiCall + '&input=input');
      });
        
      it('sends with conversation id if included', () => {
        service.sendMessage('input', 'cs');
        expect(spy).toHaveBeenCalledWith(service.apiCall + '&input=input&cs=cs');
      });

      it('returns a message', fakeAsync(() => {
        service.sendMessage('input').subscribe(message => {
          tick();
          expect(message).toEqual(fullMessage);
        });
      }));
    });

    describe('error', () => {
      it('handles error', () => {
        let spy = spyOn(http, 'get').and.returnValue(Observable.of({}));
        let errorMessage: ChatbotMessage = {
          source: 'bot',
          message: 'Chatbot down for maintenance, come back soon...',
        };

        service.sendMessage('whatever').subscribe(message => {
          expect(message).toEqual(errorMessage);
        });
      });
    });
  });

});
