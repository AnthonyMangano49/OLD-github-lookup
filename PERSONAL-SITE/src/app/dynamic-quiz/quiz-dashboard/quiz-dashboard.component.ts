import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from '../shared/quiz-service';
import { ICategory } from '../shared/quiz';

@Component({
  selector: 'app-quiz-dashboard',
  templateUrl: './quiz-dashboard.component.html',
  styleUrls: ['./quiz-dashboard.component.css']
})
export class QuizDashboardComponent implements OnInit, OnDestroy{
  interval;
  quizList: Array<ICategory>;
  currentQuiz: ICategory;
  userName: string;
  lastLogin: string;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  init() {
    this.quizCarousel();
    this.quizList = this.quizService.getCategories();
    this.currentQuiz = this.quizList[0];
    this.userName = localStorage.getItem('login');
    this.lastLogin = localStorage.getItem('lastLogin')
  }

  quizCarousel() {
    let count = 1;
    this.interval = setInterval(() => {
      if(count >= this.quizList.length)
        count = 0;
      this.currentQuiz = this.quizList[count];
      count ++;
    }, 4000);
  }

  setImage(url: string) {
    return {'background-image' : `url(${url})`}
  }

}
