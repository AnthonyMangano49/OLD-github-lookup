import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-quiz-search',
  templateUrl: './quiz-search.component.html',
  styleUrls: ['./quiz-search.component.css']
})
export class QuizSearchComponent implements OnInit {
  quizList;

  constructor(private service: QuizService) { }

  ngOnInit() {
    this.init();
  }

  init(){
    this.quizList = this.service.getCategories().sort((a,b) => a.name > b.name ? 1 : -1);
  }

  setImage(image){
    return {'background-image': `url(${image})`}
  }

}
