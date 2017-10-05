import { Component, OnInit } from '@angular/core';
import { WorkItem, WorkItems} from './work-items';
import { Router } from '@angular/router';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  workItems: Array<WorkItem>

  constructor(private router: Router) { }
  ngOnInit() {
    this.workItems = WorkItems;
  }

  navigate(item: WorkItem){
    if(item.route.isHref){
      window.open(item.route.value);
    } else if(!item.route.isHref){
      this.router.navigate([item.route.value]);
    } else
      console.error('Invalid route type: side-bar 25');
  }

}
