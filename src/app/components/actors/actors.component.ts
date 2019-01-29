import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  actors: Object[] = [
    {'id': 1, 'nombre': 'Rodrigo'},
    {'id': 2, 'nombre': 'Miguel'},
    {'id': 3, 'nombre': 'Pablo'}
];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public editActor(id: number) {
    this.router.navigate(['/home/actors', id]);
  }

}
