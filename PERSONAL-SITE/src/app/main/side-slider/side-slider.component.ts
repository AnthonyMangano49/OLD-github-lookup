import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { Page, Pages } from '../pages/utilities';

@Component({
  selector: 'side-slider',
  templateUrl: './side-slider.component.html',
  styleUrls: ['./side-slider.component.css']
})
export class SideSliderComponent implements OnInit{
  constructor(private nav: NavigationService ) {}
  pages: Array<Page>;
  currentPage: number;

  ngOnInit(): void {
    this.init()     
  }

    init() {
    this.pages = Pages  
    this.nav.currentPage.subscribe((page: Page) => {
      this.currentPage = page.id
    });
  }
}