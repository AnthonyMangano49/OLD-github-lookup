import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IQuiz } from '../shared/quiz';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: IQuiz;

  constructor(private route: ActivatedRoute, private quizService: QuizService) {}

  ngOnInit() {
    this.route.params
      .switchMap(param => this.quizService.generateQuiz(param.name))
      .subscribe(response => this.quiz = response);
  }

}
