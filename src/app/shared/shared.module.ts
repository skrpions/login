import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const SHARED_MODULES: any[] = [
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  MatSortModule,
  MatPaginatorModule
];

@NgModule({
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES]
})

export class SharedModule { }
