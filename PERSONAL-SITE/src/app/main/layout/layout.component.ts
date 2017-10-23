import { Component, OnInit } from '@angular/core';
import { Page, Pages } from '../pages/utilities';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  pages: Array<Page>
  currentPage: Page;
  
  constructor(private nav: NavigationService) {}
  ngOnInit(): void {
    this.init();
  }

  init(){
    this.pages = Pages;
    this.nav.currentPage.subscribe((page: Page) => {
      this.currentPage = page
    });
  }

  hybridNavigate(externalInput: string, internalInput: string | number) {
    this.navigate(internalInput);
    setTimeout(() => this.externalNavigate(externalInput), 1000);
  }

  externalNavigate(input: string){
    window.open(input)
  }

  navigate(input: string | number) {
    this.nav.navigate(this.currentPage, input);
  }
}
