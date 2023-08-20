import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { ListStudentsComponent } from './views/list-students/list-students.component';
import { FormStudentComponent } from './views/form-student/form-student.component';
import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListStudentsComponent,
    FormStudentComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class StudentsModule { }
