import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  mode = 'read';
  categoriesList: Category[];

  constructor(private categories: CategoriesService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.categoriesList = this.categories.getCategories();
    this.activatedRoute.parent.url.subscribe(urlPath => {
      const url = urlPath[urlPath.length - 1].path;
      console.log(url);
      switch (url) {
        case 'read':
        this.mode = 'read';
        break;
        case 'update':
        this.mode = 'update';
        break;
        case 'delete':
        this.mode = 'delete';
        break;
      }
    });
    console.log(`mode is ${this.mode}`);
  }

  public read(id: number): void {
    console.log(`Ver ${id}`);
    this.router.navigate(['/read/category', id]);
  }

  public edit(id: number): void {
    console.log(`Editar ${id}`);
    this.router.navigate(['/update/category', id]);
  }

  public delete(id: number): void {
    console.log(`Eliminar ${id}`);
    this.router.navigate(['/delete/category', id]);
  }


}
