import { Injectable } from '@angular/core';
import { Page, Pages } from './utilities';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

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

  next(currentPage: Page, input: number){
    let next = currentPage.id + input;
    if(next >= 0 && next < this.pages.length)
      this.currentPage.next(this.pages[next]);
  }
}
