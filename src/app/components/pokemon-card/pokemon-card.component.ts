import { PokemonService } from '../../services/pokemon.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class PokemonCardComponent implements OnInit {
  /**
   * Input com o nome do pokemon
   */
  @Input('pokemon') pokemonName!: string;

  /**
   * Obsrvavel contendo a chamada http para um pokemon
   */
  public pokemon$!: Observable<Pokemon>;

  constructor(private _pokemon: PokemonService) {}

  /**
   * Ao inicializar busca o pokemon pelo nome atribuido no input
   */
  ngOnInit(): void {
    this.pokemon$ = this._pokemon.getPokemon(this.pokemonName);
  }
}
