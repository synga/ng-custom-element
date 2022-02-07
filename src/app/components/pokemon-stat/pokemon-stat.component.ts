import { Component, Input } from '@angular/core';
import { PokemonStat } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'pkm-pokemon-stat',
  templateUrl: './pokemon-stat.component.html',
  styleUrls: ['./pokemon-stat.component.scss'],
})
export class PokemonStatComponent {
  /**
   * Objeto com os stats de um pokémon
   */
  @Input('pokemonStat') pokemonStat!: PokemonStat;

  /**
   * Map com os stats dos pokémons
   */
  public pokemonStatMap: Map<string, string> = new Map([
    ['hp', 'HP'],
    ['attack', 'Ataque'],
    ['defense', 'Defesa'],
    ['special-attack', 'Atq. Especial'],
    ['special-defense', 'Def. Especial'],
    ['speed', 'Velocidade'],
    ['accuracy', 'Precisão'],
    ['evasion', 'Evasão'],
  ]);

  constructor() {}
}
