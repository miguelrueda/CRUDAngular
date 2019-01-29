import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies: Movie[] = [
    {'id': 1, 'name': 'Picardia Mexicana'},
    {'id': 2, 'name': 'La Risa en Vacaciones I'},
    {'id': 3, 'name': 'La Risa en Vacaciones II'},
    {'id': 4, 'name': 'Verano Peligroso'}
  ];

 constructor() { }

  public getMovies() {
    return this.movies;
  }

  public getMovieById(id: number) {
    return this.movies.filter(x => x.id === id)[0];
  }

}
