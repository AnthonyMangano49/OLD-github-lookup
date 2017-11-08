import { Injectable } from '@angular/core';
import { IDisplayCategory, DisplayCategory, CategoryNames, IRecordCategory, RecordCategory } from './quiz';
import { HttpClient } from '@angular/common/http';
import { Api } from './api.config';

@Injectable()
export class QuizService {
  constructor(private http: HttpClient) { }

  getCategories () {
    let categories: Array<IDisplayCategory> = [];
    
    for(let category in CategoryNames){
      categories.push(new DisplayCategory(CategoryNames[category]));
    }
    
    return categories;
  }

  getUserRecords(login: string, filterBy?: string) {
    let url = `${Api.scores}&where=login%20%3D%20'${login}'`;
    if(filterBy) url += `%20AND%20quiz_name%3D'${filterBy}'`;
    return this.getRecords(url);
  }

  getAllRecords(filterBy?: string) {
    let url = Api.scores;
    if (filterBy) url +=  `&where=quiz_name%3D'${filterBy}'`
    return this.getRecords(url);
  }

  private getRecords(url:string){
    let response: Array<IRecordCategory> = [];
    return this.http.get(url).map((r: Array<any>) => {
      r.forEach(element => {
        let record = new RecordCategory(element['quiz_name'], element['login'], element['quiz_score']);
        response.push(record);
      });
      if(!response.length)
        response.push(new RecordCategory('N/A', 'N/A', 'N/A'));
      return(response);
    });
  }
}