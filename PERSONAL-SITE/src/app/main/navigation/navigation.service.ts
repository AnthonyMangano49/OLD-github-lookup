import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Page, Pages } from '../pages/utilities';

@Injectable()
export class NavigationService {
  currentPage: BehaviorSubject<Page>;
  pages: Array<Page>;

  constructor() {
    this.init();  
  }
  
  init(): void {
    this.pages = Pages;
    this.currentPage = new BehaviorSubject<Page>(this.pages[0]);
  }

  navigate(currentPage: Page, input: number | string){
    if(typeof(input) === 'number')
      this.navByNextNumber(currentPage, input);
    else
      this.navByValue(input);
  }
  
  navByNextNumber(currentPage: Page, input: number){
    let nextPage = currentPage.id + input;
    if(nextPage >= 0 && nextPage < this.pages.length)
      this.currentPage.next(this.pages[nextPage]);
  }

  navByValue(input: string) {
    let nextPage = this.pages.find(page => page.value === input);
    this.currentPage.next(nextPage);
  }

}
