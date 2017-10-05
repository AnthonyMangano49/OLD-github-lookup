import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  workItem = [
    {
      id: 0,
      name: 'A4 Garage App',
      description: 'todo',
      img: 'garage-img'
    },{
      id: 0,
      name: 'Chatbot',
      description: 'todo',
      img: 'chat-img'
    },{
      id: 0,
      name: 'The Mangano Collective',
      description: 'todo',
      img: 'tmc-img'
    },{
      id: 0,
      name: 'A4 Garage App',
      description: 'todo',
      img: 'github-img'
    }
  ]

}
