import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, StudentRoutingModule, PageHeaderModule],
    declarations: [StudentComponent]
})
export class StudentModule {}
