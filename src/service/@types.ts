export interface SimplePokemonData {
  name: string;
  url: string;
}

export interface AllPokemonResponse {
  previous: string | null;
  next: string | null;
  count: number;
  results: SimplePokemonData[];
}

export interface PokemonResponse {
  abilities: { ability: object; is_hidden: boolean; slot: number }[];
  base_experience: number;
  forms: SimplePokemonData[];
  game_indices: { game_index: number; version: object };
  height: 17;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string; // url
  moves: { move: object; version_group__details: unknown[] };
  name: string;
  order: number;
  past_types: unknown[];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      dream_world: object;
      home: object;
      'official-artwork': object;
    };
    versions: {
      'generation-i': object;
      'generation-ii': object;
      'generation-iii': object;
      'generation-iv': object;
      'generation-v': object;
      'generation-vi': object;
      'generation-vii': object;
      'generation-viii': object;
    };
  };
  stats: { base_stat: number; effort: number; stat: object };
  types: { slot: number; type: object }[];
  weight: number;
}
