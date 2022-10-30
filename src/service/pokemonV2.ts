const provider = 'https://pokeapi.co/api/v2/';

export interface SimplePokemonResponse {
  name: string;
  url: string;
}

export interface PokemonResponse {
  results: SimplePokemonResponse[];
}

export async function getAllPokemon({
  limit
}: {
  limit?: string;
  offset?: string;
} = {}): Promise<PokemonResponse> {
  const data = await fetch(`${provider}/pokemon?limit=${limit}}`);
  return data.json();
}
