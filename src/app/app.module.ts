import { PokemonCardModule } from './components/pokemon-card/pokemon-card.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, PokemonCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
