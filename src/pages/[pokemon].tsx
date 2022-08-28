import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Pokemon3d from '@/components/Pokemon3d';
import type { GetStaticPaths, GetStaticProps } from 'next';

function Loader() {
  return null;
}

export default function Home({ pokemon }: { pokemon: string }) {
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
            <Pokemon3d pokemon={pokemon} shiny={Boolean(isShiny)} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { pokemon: 'magikarp' } }],
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  return {
    props: {
      ...params
    }
  };
};
