import { useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import type { Mesh } from 'three';

function Pokemon3d({ pokemon }: { pokemon: string }) {
  const url = {
    model: `pokemon/${pokemon}/model.obj`,
    texture: `pokemon/${pokemon}/texture.png`
  };

  const obj = useLoader(OBJLoader, url.model);
  const texture = useTexture(url.texture);

  const geometry = useMemo(() => {
    let g;
    obj.traverse((c) => {
      if (c.type === 'Mesh') {
        const _c = c as Mesh;
        g = _c.geometry;
      }
    });
    return g;
  }, [obj]);

  if (geometry) {
    return (
      <mesh geometry={geometry} scale={0.1} rotation={[1.5, -1.5, 0]}>
        <meshPhysicalMaterial map={texture} />
      </mesh>
    );
  }
  return null;
}

export default Pokemon3d;
