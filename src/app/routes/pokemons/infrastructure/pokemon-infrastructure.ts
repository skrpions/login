import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { PokemonEntity } from "../domain/entities/pokemon-entity";
import { environment } from "src/environments/environment.development";
import { Injectable } from "@angular/core";

@Injectable()
export class PokemonInfrastructure {

  private pokemons: PokemonEntity[] = [
    {
      id: '1',
      name: "Bulbasaur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      attack: 49,
      defense: 22,
      hp: 45,
      idAuthor: 12,
      type: "Grass"
    },
    {
      id: '2',
      name: "Ivysaur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      attack: 62,
      defense: 27,
      hp: 60,
      idAuthor: 12,
      type: "Grass"
      },
      {
        id: '3',
        name: "Venusaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        attack: 82,
        defense: 31,
        hp: 80,
        idAuthor: 12,
        type: "Grass"
      },
      {
        id: '4',
        name: "Charmander",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        attack: 52,
        defense: 43,
        hp: 39,
        idAuthor: 12,
        type: "Fire"
      },
      {
        id: '5',
        name: "Charmeleon",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        attack: 64,
        defense: 58,
        hp: 58,
        idAuthor: 12,
        type: "Fire"
      },
      {
        id: '6',
        name: "Charizard",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        attack: 84,
        defense: 78,
        hp: 78,
        idAuthor: 12,
        type: "Fire"
      }
  ];

  constructor(private readonly http: HttpClient) {}

  list(): Observable<PokemonEntity[]> {
    // Retornar los pokemons
    return of(this.pokemons);

    // HTTP GET
   /*  return this.http.get<PokemonEntity>(`${environment.apiPath}pokemon`,
    { headers: { authorization: 'Bearer ' + this.accessToken }}
    ); */
  }

  listOne(id: string): Observable<PokemonEntity | undefined> {
    // Retornar un solo pokemon
    const pokemon = this.pokemons.find(pokemon => pokemon.id === id);
    return of(pokemon);

    // HTTP GET
    return this.http.get<PokemonEntity>(`${environment.apiPath}pokemon/${id}`);
  }

  insert(entity: Partial<PokemonEntity>): Observable<PokemonEntity> {

    // Agregar el nuevo objeto al array
    this.pokemons.unshift(entity as PokemonEntity);

    // Retornar el objeto agregado
    return of(entity as PokemonEntity);

    // HTTP POST
    // return this.http.post<PokemonEntity>(`${environment.apiPath}pokemon`, entity);
  }

  update(id: string, entity: PokemonEntity): Observable<PokemonEntity> {

    const index = this.pokemons.findIndex(pokemon => pokemon.id === id);

    /* if (index !== -1) { */
      // Actualiza los atributos del objeto en el array
      this.pokemons[index] = { ...this.pokemons[index], ...entity };
      return of(this.pokemons[index]);
    /* } */

    // HTTP POST
    //return this.http.put<PokemonEntity>(`${environment.apiPath}pokemon/${id}`, entity);
  }

  delete(id: string): Observable<any> {
    const index = this.pokemons.findIndex(pokemon => pokemon.id === id);

    /* if (index !== -1) { */
      // Elimina el objeto del array
      this.pokemons.splice(index, 1);
      return of(undefined);
    /* } */

    return this.http.delete<PokemonEntity>(`${environment.apiPath}pokemon/${id}`);
  }

}
