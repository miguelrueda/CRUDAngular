import { Component, OnInit } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/interfaces/actor';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  actorId = -1;
  movieId = -1;
  categoryId = -1;
  currentTab = 'actors';

  constructor(private actors: ActorsService, private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (!this.activatedRoute.queryParams) {
      this.currentTab = 'actors';
    } else {
      this.activatedRoute.queryParams.subscribe(params => {
        if (params['actorId'] && params['actorId'] !== '') {
          const actorIdentifier = +params['actorId'];
          console.log(`get actor ${actorIdentifier}`);
          const actor: Actor = this.actors.getActorById(actorIdentifier);
          console.log(`Id: ${actor.id}, Nombre: ${actor.name}`);
          this.actorId = actor.id;
        } else if (params['movieId'] && params['movieId'] !== '') {
          // this.currentTab = 'movies';
          this.setCurrentTab('movies');
          const movieIdentifier = +params['movieId'];
          console.log(`get movie ${movieIdentifier}`);
          this.movieId = movieIdentifier;
        } else if (params['categoryId'] && params['categoryId'] !== '') {
          const categoryIdentifier = +params['categoryId'];
          console.log(`get category ${categoryIdentifier}`);
          this.setCurrentTab('categories');
          this.categoryId = categoryIdentifier;
        }
      });
    }
  }

  setCurrentTab(value: string) {
    console.log('set current tab to: ' + value);
    this.currentTab = value;
  }

  isTabActive(value: string) {
    if (this.currentTab === value) {
      return true;
    }
    return false;
  }

}
