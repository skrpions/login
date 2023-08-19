import { Observable } from "rxjs";
import { PokemonEntity } from "../entities/pokemon-entity";

export interface PokemonRepository {
  list(): Observable<any[]>;
  listOne(id: number): Observable<PokemonEntity>;
  insert(pokemonEntity: Partial<PokemonEntity>): Observable<PokemonEntity>;
  update(id: number, pokemonEntity: Partial<PokemonEntity>): Observable<PokemonEntity>;
  delete(id: number): Observable<PokemonEntity>;
}
