import Link from 'next/link';

export default function Home() {
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
        <Link href="/charizard">
          <a>Charizard</a>
        </Link>
        <Link href="/magikarp">
          <a>Magikarp</a>
        </Link>
        <Link href="/machamp">
          <a>Machamp</a>
        </Link>
      </div>
    </div>
  );
}
