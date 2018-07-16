import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
  animations: [routerTransition()]
})
export class SaleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
