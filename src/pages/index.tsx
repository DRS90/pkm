import React, { Suspense, useMemo } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/fiber';
import type { Mesh } from 'three';

function Pokemon({ pkmId }: { pkmId: number }) {
  const obj = useLoader(OBJLoader, `/models/${pkmId}.obj`);
  const texture = useTexture(`/texture/${pkmId}.png`);
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

export default function Home() {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        backgroundColor: '#111a21',
        width: '100vw',
        height: '100vh'
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Pokemon pkmId={129} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
