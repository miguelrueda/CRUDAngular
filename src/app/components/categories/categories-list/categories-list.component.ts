import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  @Input() mode: String;
  private categoriesList: Object[];

  constructor(private categories: CategoriesService,
    private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.categoriesList = this.categories.getCategories();
  }

  public edit(id: number): void {
    console.log(`Editar ${id}`);
  }

  public delete(id: number): void {
    console.log(`Eliminar ${id}`);
  }

}
