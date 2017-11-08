import { Component, OnInit, OnDestroy } from '@angular/core';
import { IDisplayCategory, RecordCategory } from '../shared/quiz';
import { QuizService } from '../shared/quiz.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import { PasswordManager } from '../shared/api.config';

@Component({
  selector: 'app-quiz-dashboard',
  templateUrl: './quiz-dashboard.component.html',
  styleUrls: ['./quiz-dashboard.component.css']
})
export class QuizDashboardComponent implements OnInit, OnDestroy{
  interval;
  categorySelect;
  login: string;
  lastLogin: string;
  quizList: Array<IDisplayCategory>;
  currentQuiz: IDisplayCategory;
  personalStream= new Subject();
  overallStream= new Subject();
  records: Array<{title: string, values: Array<RecordCategory>}> = [
    {
      title: "personal records",
      values: []
    },    {
      title: "overall records",
      values: []
    }
  ]

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.init();
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  //break this apart for testing
  init() {
    this.quizCarousel();
    this.quizList = this.quizService.getCategories();
    this.currentQuiz = this.quizList[0];
    this.login = localStorage.getItem('login');
    this.lastLogin = localStorage.getItem('lastLogin');
    this.categorySelect = this.quizList.map(e => {
      return {
        name: e.name,
        displayName: e.displayName
      }
    })
    this.personalStream
      .switchMap((filterBy: any) => this.quizService.getUserRecords(this.login, filterBy))
      .subscribe((response: Array<RecordCategory>) => this.records[0].values = response);
    this.overallStream
      .switchMap((filterBy: any) => this.quizService.getAllRecords(filterBy))
      .subscribe((response: Array<RecordCategory>) => this.records[1].values = response);
    this.personalStream.next(false);
    this.overallStream.next(false);
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

  filterRecords(recordType, filterBy){
    let stream = (recordType === 'personal records') ? 'personalStream' : 'overallStream';
    this[stream].next(filterBy);
  }

  updatePassword(password){
    PasswordManager([password, this.login]);
  }

}
