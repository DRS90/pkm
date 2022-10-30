const provider = {
  basePath: 'https://pokeapi.co/api/v2/',
  get<T>(url: string): Promise<T> {
    return fetch(this.basePath + url).then((data) => data.json());
  }
};

export interface SimplePokemonResponse {
  name: string;
  url: string;
}

export interface PokemonResponse {
  previous: string | null;
  next: string | null;
  count: number;
  results: SimplePokemonResponse[];
}

export async function getAllPokemon({
  limit
}: {
  limit?: string;
  offset?: string;
} = {}): Promise<PokemonResponse['results']> {
  const data = await provider.get<PokemonResponse>(`/pokemon?limit=${limit}`);
  return data.results;
}
