import { Injectable } from '@angular/core';
import { ICategory, CategoryNames, Category } from './quiz';

@Injectable()
export class QuizService {
  constructor() { }

  getCategories () {
    let categories: Array<ICategory> = [];
    
    for(let category in CategoryNames){
      categories.push(new Category(CategoryNames[category]));
    }

    return categories;
  }

}
