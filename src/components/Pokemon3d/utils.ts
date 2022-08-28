import type { Pokemon3dProps } from './Pokemon3d';

const rootFolder = 'pokemon';
const materialExtension = '.mtl';
const modelExtension = '.obj';

function normalizePokemonName(pokemon: Pokemon3dProps['pokemon']) {
  return pokemon.toLowerCase();
}

export function getPokemonFiles(pokemon: string, shiny: boolean) {
  const pokemonList = [
    '068 - Machamp',
    '129 - Magikarp',
    '006 - Charizard'
  ].sort((a, b) => a.localeCompare(b));
  const pokemonFolderName = pokemonList.find((pkm) =>
    normalizePokemonName(pkm).includes(normalizePokemonName(pokemon))
  );
  if (pokemonFolderName) {
    const shinySuffix = shiny ? ' - Shiny' : '';
    const pokemonFileName = pokemonFolderName + shinySuffix;
    return {
      model: `${rootFolder}/${pokemonFolderName}/${pokemonFileName}${modelExtension}`,
      texture: `${rootFolder}/${pokemonFolderName}/${pokemonFileName}${materialExtension}`
    };
  }
  throw new Error(`Couldn't find ${pokemon}`);
}
