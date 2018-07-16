import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [CommonModule,StaffRoutingModule,PageHeaderModule],
  declarations: [StaffComponent]
})
export class StaffModule { }
