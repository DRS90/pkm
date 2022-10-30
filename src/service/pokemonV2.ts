import type * as T from './@types';

const provider = {
  basePath: 'https://pokeapi.co/api/v2/pokemon',
  get<T>(url?: string): Promise<T> {
    return fetch(this.basePath + url).then((data) => data.json());
  }
};

export async function getAllPokemon({
  limit
}: {
  limit?: string;
  offset?: string;
} = {}): Promise<T.AllPokemonResponse['results']> {
  const data = await provider.get<T.AllPokemonResponse>(`?limit=${limit}`);
  return data.results;
}

export async function getPokemonByName(pokemonName: string) {
  return await provider.get<T.PokemonResponse>(`/${pokemonName}`);
}
