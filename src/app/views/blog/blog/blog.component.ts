import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  animations: [routerTransition()]
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
