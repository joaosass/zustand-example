import Head from 'next/head'
import Players from '../components/Players'
import Positions from '../components/Positions';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zustand example</title>
        <meta name="description" content="Zustand example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Players />
      <Positions />
    </div>
  )
}
