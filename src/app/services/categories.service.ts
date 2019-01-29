import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: Category[] = [
    {'id': 1, 'name': 'Drama'},
    {'id': 2, 'name': 'Suspenso'},
    {'id': 3, 'name': 'Acción'},
    {'id': 4, 'name': 'Ciencia Ficción'},
  ];


  constructor() { }

  public getCategories() {
    return this.categories;
  }

  public getCategoryById(id: number) {
    return this.categories.filter(x => x.id === id)[0];
  }

}
