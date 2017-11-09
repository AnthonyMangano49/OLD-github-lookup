import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-quiz-search',
  templateUrl: './quiz-search.component.html',
  styleUrls: ['./quiz-search.component.css']
})
export class QuizSearchComponent implements OnInit {
  quizList;
  sortIcon = 'desc';

  constructor(private service: QuizService) { }

  ngOnInit() {
    this.init();
  }

  init(){
    this.quizList = this.service.getCategories();
    this.sort();
  }

  setImage(image){
    return {'background-image': `url(${image})`}
  }

  sort = () => {
    if(this.sortIcon === 'asc')
      this.quizList = this.quizList.sort((a, b) => a.name > b.name ? -1 : 1);
    else
      this.quizList = this.quizList.sort((a, b) => a.name > b.name ? 1 : -1);

    this.sortIcon = (this.sortIcon === 'asc') ? 'desc' : 'asc';
  }

}
