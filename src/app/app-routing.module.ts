import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/views/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch:'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./routes/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'dashboard', // (Private) 🚷 Dashboard ...
    component: HomeComponent,
    //canActivate: [authenticationGuard],
    children:[
      {
        path: 'students',
        loadChildren: () => import('./routes/students/students.module').then(m => m.StudentsModule),
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
