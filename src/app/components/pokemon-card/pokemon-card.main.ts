import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { PokemonCardModule } from './pokemon-card.module';
import { environment } from 'src/environments/environment';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () =>
  platformBrowserDynamic().bootstrapModule(PokemonCardModule);
bootstrap().catch((err) => console.error(err));
