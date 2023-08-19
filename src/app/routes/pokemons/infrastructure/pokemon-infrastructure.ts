import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PokemonEntity } from "../domain/entities/pokemon-entity";
import { environment } from "src/environments/environment.development";
import { Injectable } from "@angular/core";

@Injectable()
export class PokemonInfrastructure {
  constructor(private readonly http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get<any>(`${environment.apiPath}pokemon`,
    /* { headers: { authorization: 'Bearer ' + this.accessToken }} */
    );
  }

  listOne(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }

  insert(entity: Partial<PokemonEntity>): Observable<PokemonEntity> {
    return this.http.post<PokemonEntity>(`${environment.apiPath}pokemon`, entity);
  }

  update(id: number, entity: Partial<PokemonEntity>): Observable<PokemonEntity> {
    return this.http.put<PokemonEntity>(`${environment.apiPath}pokemon/${id}`, entity);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<PokemonEntity>(`${environment.apiPath}pokemon/${id}`);
  }

}
