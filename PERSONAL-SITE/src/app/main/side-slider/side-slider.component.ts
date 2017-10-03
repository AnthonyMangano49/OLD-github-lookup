import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-slider',
  templateUrl: './side-slider.component.html',
  styleUrls: ['./side-slider.component.css']
})
export class SideSliderComponent implements OnInit{
  ngOnInit(): void {
      this.currentPage = 0;
  }

  //observable? bothe of these will need to be inputs
  currentPage: number;
  pages: Array<number> = [1,2,3,4];
}