import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentsComponent } from './views/list-students/list-students.component';
import { DetailStudentComponent } from './views/detail-student/detail-student.component';

const routes: Routes = [
  {
    path: '',
    component:  ListStudentsComponent
  },
  {
    path: 'detail/:id',
    component: DetailStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
