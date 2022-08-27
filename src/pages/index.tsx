import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Pokemon3d from '@/components/Pokemon3d';

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
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Pokemon3d pokemon="magikarp" />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
