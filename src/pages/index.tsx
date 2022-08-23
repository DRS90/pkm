import Head from 'next/head';
import { styled } from '@/styles/stitches.config';

const Title = styled('h1', {
  color: '$hiContrast',
  variants: {
    responsive: {
      true: {
        fontSize: '$subTitle',
        '@desktop': {
          fontSize: '$title'
        }
      },
      false: {
        fontSize: '$title'
      }
    }
  }
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nextjs Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title responsive>Boilerplate</Title>
      </main>
    </div>
  );
}
