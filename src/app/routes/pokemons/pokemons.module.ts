import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { ListPokemonsComponent } from './views/list-pokemons/list-pokemons.component';
import { FormPokemonComponent } from './views/form-pokemon/form-pokemon.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgOptimizedImage } from '@angular/common';


@NgModule({
  declarations: [
    ListPokemonsComponent,
    FormPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MaterialModule,
    SharedModule,
    NgOptimizedImage,
  ]
})
export class PokemonsModule { }
