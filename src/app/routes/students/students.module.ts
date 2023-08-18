import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { ListStudentsComponent } from './views/list-students/list-students.component';
import { FormStudentComponent } from './views/form-student/form-student.component';
import { DetailStudentComponent } from './views/detail-student/detail-student.component';
import { MaterialModule } from '../../shared/material.module';


@NgModule({
  declarations: [
    ListStudentsComponent,
    FormStudentComponent,
    DetailStudentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
