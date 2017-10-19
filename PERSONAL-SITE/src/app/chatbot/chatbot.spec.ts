import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotComponent } from './chatbot.component';
import { ApiCall } from './shared/chatbot-config';
import { ChatbotMessage } from './shared/chatbot-utilities';
import { FormsModule } from '@angular/forms';
import { ChatbotService } from './shared/chatbot.service';
import { fakeAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

describe('ChatbotComponent', () => {
  let fixture: ComponentFixture<ChatbotComponent>;
  let component: ChatbotComponent;
  let chatbotService: ChatbotService;
  let MockChatbotService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotComponent ],
      imports: [FormsModule],
      providers: [{provide: ChatbotService, useValue: MockChatbotService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    MockChatbotService = {
      sendMessage: () => Observable.of('outMessage')
    }

    fixture = TestBed.createComponent(ChatbotComponent);
    component = fixture.componentInstance;
    chatbotService = fixture.debugElement.injector.get(ChatbotService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('component init', () => {
    it('should call init', () => {
      let spy = spyOn(component, 'init');
  
      component.ngOnInit();
  
      expect(spy).toHaveBeenCalled();
    });

    it('sets values on init', () => {
      let values = {currentChat: 'xxx', defaultMessage: 'xxx', conversationId: 'xxx' };
      for( let value in values) component[value] = values[value];

      component.init();

      for ( let value in values ) expect(component[value]).not.toBe('xxx');
    })
  });

  describe('send message observable', () => {
    it('sends message from stream', fakeAsync(() => {
      var spy = spyOn(component, 'sendMessageToServer');
      
      component.messageStream.next('message');
      tick(1000);
      
      expect(spy).toHaveBeenCalledWith('message');
    }));

    it('calls server and subscribes', fakeAsync(() => {
      var spy = spyOn(component, 'setMessageFromServer');
      
      component.sendMessageToServer('inMessage');
      tick();
      
      expect(spy).toHaveBeenCalledWith('outMessage');
    }));

    it('sets message from server', () => {
      let message:ChatbotMessage = {conversationId: 'a', message: 'a', source: 'bot'}

      component.setMessageFromServer(message);
      
      expect(component.conversationId).toBe(message.conversationId);
      expect(component.currentChat).toEqual([message]);
    })
  });

  describe('setMessageClass', () => {
    it('works', () => {
      let test = (input, output) => expect(component.setMessageClass(input)).toBe(output);

      test('user', 'user-message');
      test('bot', 'bot-message');
      test('', 'bot-message');
    })
  });

  describe('submitMessage', () => {
    let spy;
    beforeEach(() => {
      spy = spyOn(component.messageStream, 'next');
    })

    describe('input', () => {
      beforeEach(() => {
        component.input = 'spaghetti'
        component.submitMessage();
      });
      it('adds user input to current chat', () => {
        expect(component.currentChat).toEqual([{source: 'user', message: 'spaghetti'}]);
      });
  
      it('adds message to stream', () => {
        expect(spy).toHaveBeenCalledWith('spaghetti');
      });
  
      it('resets message', () => {
        expect(component.input).toBe('')
      });
    })
    it('only submits if passed input', () => {
      component.input = '  ';

      component.submitMessage();
      
      expect(spy).not.toHaveBeenCalled();
    });
  });

});