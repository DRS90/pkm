import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';

import Pokemon3d from '@/components/Pokemon3d';
import type { GetStaticPaths, GetStaticPropsContext } from 'next';
import { getPokemonByName } from '@/service/pokemonV2';
import Link from 'next/link';
import { ErrorBoundary } from '../components/ErrorBoundary';

function Loader() {
  return null;
}
type Props = Awaited<ReturnType<typeof getPokemonByName>>;

export default function Pokemon({ name, height, sprites }: Props) {
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

        <Canvas
          style={{
            width: '50vw',
            height: '50vh',
            display: 'grid',
            placeItems: 'center'
          }}
        >
          <ambientLight intensity={1} />
          <Suspense fallback={<Loader />} key={String(isShiny)}>
            <ErrorBoundary
              Fallback={
                <Html>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      (isShiny
                        ? sprites.front_shiny
                        : sprites.front_default) as string
                    }
                    alt={`Pokemon ${name}`}
                  />
                </Html>
              }
            >
              <Pokemon3d pokemon={{ name, height }} shiny={Boolean(isShiny)} />
            </ErrorBoundary>
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
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
