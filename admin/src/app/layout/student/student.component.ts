import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss'],
    animations: [routerTransition()]
})
export class StudentComponent implements OnInit {
    constructor() {console.log('fdf');}

    ngOnInit() {}
}
