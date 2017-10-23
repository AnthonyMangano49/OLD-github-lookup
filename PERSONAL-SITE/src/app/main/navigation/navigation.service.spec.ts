import { TestBed, inject } from '@angular/core/testing';

import { NavigationService } from './navigation.service';
import { Pages } from '../pages/utilities';

let navigationService: NavigationService;

describe('NavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigationService]
    });
  });

  it('should be init', inject([NavigationService], (service: NavigationService) => {
    navigationService = service;
    expect(service).toBeTruthy();
    expect(service.pages).toBe(Pages);
    expect(service.currentPage.value).toBe(Pages[0]);
  }));

  it('calls navigate function by input', () => {
    let numberSpy = spyOn(navigationService, 'navByNextNumber');
    let valueSpy = spyOn(navigationService, 'navByValue');

    navigationService.navigate(Pages[1], 'value');
    
    expect(valueSpy).toHaveBeenCalledWith('value');
    expect(numberSpy).not.toHaveBeenCalled();

    navigationService.navigate(Pages[1], 1);

    expect(valueSpy).toHaveBeenCalledTimes(1);
    expect(numberSpy).toHaveBeenCalledWith(Pages[1], 1);
  });

  it('navigates by value', () => {
    let spy = spyOn(navigationService.currentPage, 'next');
    let max  = navigationService.pages.length -1;

    navigationService.navByNextNumber(Pages[0], -1);
    expect(spy).not.toHaveBeenCalled;

    navigationService.navByNextNumber(Pages[max], 1);
    expect(spy).not.toHaveBeenCalled;

    navigationService.navByNextNumber(Pages[0], 1);
    expect(spy).toHaveBeenCalledWith(Pages[1]);
  });

  it('navigates by value', () => {
    var spy = spyOn(navigationService.currentPage, 'next');
    
    navigationService.navByValue(Pages[0].value);

    expect(spy).toHaveBeenCalledWith(Pages[0]);
  });
});
