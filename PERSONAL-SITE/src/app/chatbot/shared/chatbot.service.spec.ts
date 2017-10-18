import { TestBed, inject } from '@angular/core/testing';

import { ChatbotService } from './chatbot.service';

describe('ChatbotServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatbotService]
    });
  });

  it('should be created', inject([ChatbotService], (service: ChatbotService) => {
    expect(service).toBeTruthy();
  }));
});
