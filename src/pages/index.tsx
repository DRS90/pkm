import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Pokemon3d from '@/components/Pokemon3d';

function Loader() {
  return null;
}

export default function Home() {
  return (
    <Canvas
      camera={{ fov: 15 }}
      style={{
        backgroundColor: '#111a21',
        width: '100vw',
        height: '100vh'
      }}
    >
      <ambientLight intensity={1} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={<Loader />}>
        <Pokemon3d pokemon="magikarp" />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
