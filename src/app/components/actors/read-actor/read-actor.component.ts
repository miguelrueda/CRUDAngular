import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-actor',
  templateUrl: './read-actor.component.html',
  styleUrls: ['./read-actor.component.scss']
})
export class ReadActorComponent implements OnInit {

  mode = 'read';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
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

}
