import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonStatComponent } from '../pokemon-stat/pokemon-stat.component';
import { PokemonCardComponent } from './pokemon-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Injector, NgModule, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule],
  exports: [PokemonCardComponent],
  declarations: [PokemonCardComponent, PokemonStatComponent],
  providers: [PokemonService],
})
export class PokemonCardModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const pokemonCardElement = createCustomElement(PokemonCardComponent, {
      injector: this.injector,
    });
    customElements.define('pokemon-card', pokemonCardElement);
  }
}
