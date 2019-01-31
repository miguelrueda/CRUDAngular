import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActorsService } from 'src/app/services/actors.service';
import { Actor } from 'src/app/interfaces/actor';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {

  mode = 'read';
  actorsList: Actor[];
  currentId = -1;

  constructor(private actors: ActorsService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // console.log('mode ' + this.mode);
    this.actorsList = this.actors.getActors();
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
    console.log(`mode is ${this.mode}`);
  }

  public read(id: number): void {
    console.log(`Ver ${id}`);
    this.router.navigate(['/read/actor', id]);
  }

  public edit(id: number): void {
    console.log(`Editar ${id}`);
    this.router.navigate(['/update/actor', id]);
  }

  public delete(id: number): void {
    this.currentId = id;
    console.log(`Eliminar ${id}`);
    this.router.navigate(['/delete/actor', id]);
  }

  public performDelete() {
    console.log(`Eliminar ${this.currentId}`);
  }

}
