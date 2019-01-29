import { Injectable } from '@angular/core';
import { Actor } from '../interfaces/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  actors: Actor[] = [
    {'id': 1, 'name': 'Adalberto Martínez "Resortes"'},
    {'id': 2, 'name': 'Vicente Fernandez'},
    {'id': 3, 'name': 'Pablo Ferrel'},
    {'id': 4, 'name': 'Pedro Romo'},
    {'id': 5, 'name': 'Paco Ibañez'}
  ];

  constructor() { }

  public getActors() {
    return this.actors;
  }

  public getActorById(id: number) {
    return this.actors.filter(x => x.id === id)[0];
  }
}
