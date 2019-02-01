import { Component, OnInit, Input } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';
import { Actor } from 'src/app/interfaces/actor';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent implements OnInit {

  @Input() actorId;
  currentActor: Actor;

  constructor(private actors: ActorsService) { }

  ngOnInit() {
    console.log('actor id ' + this.actorId);
    this.currentActor = this.actors.getActorById(this.actorId);
  }

}
