import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/interfaces/actor';
import { ActorsService } from 'src/app/services/actors.service';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.scss']
})
export class CreateActorComponent implements OnInit {

  @Input() actorId: number;
  private currentActor: Actor;
  actorName = '';

  constructor(private actors: ActorsService, private countries: CountriesService) { }

  ngOnInit() {
    if (this.actorId && this.actorId !== -1) {
      this.currentActor = this.actors.getActorById(this.actorId);
      this.actorName = this.currentActor.name;
    } else {
      console.log('undefined id');
    }
  }

}
