import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { getPokemonFiles } from './utils';
import type { PokemonResponse } from '@/service/@types';

export interface Pokemon3dProps {
  pokemon: Pick<PokemonResponse, 'name' | 'height'>;
  shiny: boolean;
}

function Pokemon3d({ pokemon, shiny }: Pokemon3dProps) {
  const pokemonFile = getPokemonFiles(pokemon.name, shiny);

  const materials = useLoader(MTLLoader, pokemonFile.texture);
  const object = useLoader(OBJLoader, pokemonFile.model, (loader) => {
    materials.preload();
    (loader as OBJLoader).setMaterials(materials);
  });

  return (
    <primitive
      object={object}
      scale={pokemon.height * 0.05}
      rotation={[0.5, 0, 0]}
      position={[0, pokemon.height * -0.05, 0]}
    />
  );
}

export default Pokemon3d;
