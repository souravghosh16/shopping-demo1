import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  animations: [routerTransition()]
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
