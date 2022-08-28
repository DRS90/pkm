import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Pokemon3d from '@/components/Pokemon3d';

function Loader() {
  return null;
}

export default function Home() {
  const [isShiny, setIsShiny] = useState(false);
  return (
    <div
      style={{
        backgroundColor: '#111a21',
        width: '100vw',
        height: '100vh',
        display: 'grid',
        placeItems: 'center'
      }}
    >
      <div>
        <label
          style={{
            color: 'white',
            display: 'flex',
            justifyContent: 'right'
          }}
        >
          <input
            type="checkbox"
            checked={isShiny}
            value={String(isShiny)}
            onChange={() => setIsShiny(!isShiny)}
          />
          Shiny
        </label>
        <Canvas style={{ width: '50vw', height: '50vh' }}>
          <ambientLight intensity={1} />
          <Suspense fallback={<Loader />} key={String(isShiny)}>
            <Pokemon3d pokemon="machamp" shiny={Boolean(isShiny)} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
