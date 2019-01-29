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

  actorName = '';

  constructor(private actors: ActorsService, private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['actorId'] !== '') {
        const actorIdentifier = +params['actorId'];
        console.log(`get actor ${actorIdentifier}`);
        const actor: Actor = this.actors.getActorById(actorIdentifier);
        console.log(`Id: ${actor.id}, Nombre: ${actor.name}`);
        this.actorName = actor.name;
      } else {
        this.actorName = '';
      }
    });
  }

}
