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
import { PokemonApplication } from './routes/pokemons/application/pokemon-application';
import { PokemonInfrastructure } from './routes/pokemons/infrastructure/pokemon-infrastructure';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


// Declaron constantes para los providers
const application = [
  PokemonApplication,
];
const infrastructure = [
  PokemonInfrastructure
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    AuthModule,
    HomeModule,
    StudentsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    ...application,
    ...infrastructure,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
