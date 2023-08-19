import { Inject, Injectable } from "@angular/core";
import { PokemonInfrastructure } from "../infrastructure/pokemon-infrastructure";
import { PokemonRepository } from "../domain/repositories/pokemon-repository";
import { PokemonEntity } from "../domain/entities/pokemon-entity";
import { Observable } from "rxjs";

@Injectable()
export class PokemonApplication {
  constructor(@Inject(PokemonInfrastructure) private readonly pokemonRepository: PokemonRepository) {}

  list() {
    return this.pokemonRepository.list();
  }

  listOne(id:number) {
    return this.pokemonRepository.listOne(id);
  }

  insert(pokemonEntity: Partial<PokemonEntity>) {
    return this.pokemonRepository.insert(pokemonEntity);
  }

  update(id: number, entity: Partial<PokemonEntity>): Observable<PokemonEntity> {
    return this.pokemonRepository.update(id, entity);
  }

  delete(id: number) {
    return this.pokemonRepository.delete(id);
  }
}
