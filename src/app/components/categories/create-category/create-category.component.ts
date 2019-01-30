import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  @Input() categoryId: number;
  private currentCategory: Category;
  categoryName = '';

  constructor(private categories: CategoriesService) { }

  ngOnInit() {
    if (this.categoryId && this.categoryId !== -1) {
      this.currentCategory = this.categories.getCategoryById(this.categoryId);
      this.categoryName = this.currentCategory.name;
    } else {
      console.log('undefined id');
    }
  }

}
