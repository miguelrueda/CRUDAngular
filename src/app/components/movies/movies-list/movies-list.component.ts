import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  mode = 'read';
  moviesList: Movie[];

  constructor(private movies: MoviesService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.moviesList = this.movies.getMovies();
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
  }

  public read(id: number): void {
    console.log(`Ver ${id}`);
    this.router.navigate(['/read/movie', id]);
  }

  public edit(id: number): void {
    console.log(`Editar ${id}`);
    this.router.navigate(['/update/movie', id]);
  }

  public delete(id: number): void {
    console.log(`Eliminar ${id}`);
    this.router.navigate(['/delete/movie', id]);
  }


}
