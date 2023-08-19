import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { ListPokemonsComponent } from './views/list-pokemons/list-pokemons.component';
import { FormPokemonComponent } from './views/form-pokemon/form-pokemon.component';
import { DetailPokemonComponent } from './views/detail-pokemon/detail-pokemon.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListPokemonsComponent,
    FormPokemonComponent,
    DetailPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PokemonsModule { }
