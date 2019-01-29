import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {

  @Input() mode: String;
  private actorsList: Object[];

  constructor(private actors: ActorsService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('mode ' + this.mode);
    this.actorsList = this.actors.getActors();
  }

  public edit(id: number): void {
    console.log(`Editar ${id}`);
    this.router.navigate(['/create'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        actorId: id
      }
    });
  }

  public delete(id: number): void {
    console.log(`Eliminar ${id}`);
  }


}
