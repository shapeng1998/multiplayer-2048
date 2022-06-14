import type { NextPage } from 'next'
import Head from 'next/head'
import { Board } from '../components/Board'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Multiplayer 2048 Game</title>
        <meta name="description" content="Multiplayer 2048 Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center items-center h-screen">
        <Board />
      </div>
    </>
  )
}

export default Home
