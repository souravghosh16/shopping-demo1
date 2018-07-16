import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SubjectRoutingModule } from './subject-routing.module';
import {SubjectComponent } from './subject.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule,SubjectRoutingModule, PageHeaderModule],
    declarations: [SubjectComponent]
})
export class SubjectModule {}
