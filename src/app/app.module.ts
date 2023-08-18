import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './routes/home/home.module';
import { StudentsModule } from './routes/students/students.module';
import { AuthModule } from './routes/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    AuthModule,
    HomeModule,
    StudentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
