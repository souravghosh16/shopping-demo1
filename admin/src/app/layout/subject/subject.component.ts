import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.scss'],
    animations: [routerTransition()]
})
export class SubjectComponent implements OnInit {
    constructor() {console.log('fdf');}

    ngOnInit() {}
}
