import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared/navigation.service';
import { Pages, Page } from '../shared/utilities';

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
      this.pages = Pages  
      this.nav.currentPage.subscribe((page: Page) => {
        this.currentPage = page.id
      });
      
  }
}