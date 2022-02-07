/**
 * Interface com as imagens do pokemon
 */
export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
}

/**
 * Interface para os stats do pokemon
 */
export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

/**
 * Iterface contendo um pokemon
 */
export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: any[];
  forms: any[];
  game_indices: any[];
  held_items: any[];
  location_area_encounters: string;
  moves: any[];
  past_types: any[];
  sprites: PokemonSprites;
  species: any;
  stats: PokemonStat[];
  types: any[];
}
