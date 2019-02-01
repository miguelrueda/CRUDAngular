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

  constructor(private actors: ActorsService, private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
