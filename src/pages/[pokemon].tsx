import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Pokemon3d from '@/components/Pokemon3d';
import type { GetStaticPaths, GetStaticPropsContext } from 'next';
import { getPokemonByName } from '@/service/pokemonV2';
import Link from 'next/link';

function Loader() {
  return null;
}
type Props = Awaited<ReturnType<typeof getPokemonByName>>;

export default function Pokemon({ name, height }: Props) {
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
      <Link href={'/'}>
        <a style={{ color: 'white' }}>Back</a>
      </Link>
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
        <Canvas style={{ width: '50vw', height: height * 50 }}>
          <ambientLight intensity={1} />
          <Suspense fallback={<Loader />} key={String(isShiny)}>
            <Pokemon3d pokemon={name} shiny={Boolean(isShiny)} />
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

export async function getStaticProps({
  params
}: GetStaticPropsContext<{ pokemon: string }>) {
  if (!params?.pokemon) {
    throw new Error('Expect pokemon');
  }
  return {
    props: {
      ...(await getPokemonByName(params.pokemon))
    }
  };
}
