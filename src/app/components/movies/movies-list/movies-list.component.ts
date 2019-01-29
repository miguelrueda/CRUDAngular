import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  @Input() mode: String;
  private moviesList: Object[];

  constructor(private movies: MoviesService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.moviesList = this.movies.getMovies();
  }

  public edit(id: number): void {
    console.log(`Editar ${id}`);
  }

  public delete(id: number): void {
    console.log(`Eliminar ${id}`);
  }


}
