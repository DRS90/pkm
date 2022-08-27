import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { getPokemonFiles } from './utils';

export interface Pokemon3dProps {
  pokemon: string;
}

function Pokemon3d({ pokemon }: { pokemon: string }) {
  const pokemonFile = getPokemonFiles(pokemon);

  const materials = useLoader(MTLLoader, pokemonFile.texture);
  const object = useLoader(OBJLoader, pokemonFile.model, (loader) => {
    materials.preload();
    (loader as OBJLoader).setMaterials(materials);
  });

  return <primitive object={object} scale={0.5} rotation={[0.5, 0, 0]} />;
}

export default Pokemon3d;
