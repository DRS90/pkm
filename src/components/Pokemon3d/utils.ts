import type { Pokemon3dProps } from './Pokemon3d';

const rootFolder = 'pokemon';
const materialExtension = '.mtl';
const modelExtension = '.obj';

function normalizePokemonName(pokemon: Pokemon3dProps['pokemon']) {
  return pokemon.toLowerCase();
}

export function getPokemonFiles(pokemon: string) {
  const pokemonList = ['068 - Machamp', '129 - Magikarp', '006 - Charizard'];
  const pokemonFileName = pokemonList.find((pkm) =>
    normalizePokemonName(pkm).includes(normalizePokemonName(pokemon))
  );
  if (pokemonFileName) {
    return {
      model: `${rootFolder}/${pokemonFileName}/${pokemonFileName}${modelExtension}`,
      texture: `${rootFolder}/${pokemonFileName}/${pokemonFileName}${materialExtension}`
    };
  }
  throw new Error(`Couldn't find ${pokemon}`);
}
