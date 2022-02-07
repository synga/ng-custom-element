import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  /**
   * Busca os dados de um pokemon.
   */
  getPokemon(pokemon: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${environment.API_URL}/pokemon/${pokemon}`);
  }
}
