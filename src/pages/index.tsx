import { getAllPokemon } from '@/service/pokemonV2';
import Link from 'next/link';

interface HomeProps {
  pokemonList: Awaited<ReturnType<typeof getAllPokemon>>;
}

export default function Home({ pokemonList }: HomeProps) {
  console.log(pokemonList.results);
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
      <div style={{ display: 'grid', gap: 8 }}>
        {pokemonList.results.map((pokemon) => (
          <Link href="/machamp" key={pokemon.name}>
            <a>{pokemon.name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  return { props: { pokemonList: await getAllPokemon({ limit: '151' }) } };
}
