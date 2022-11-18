import dynamic from 'next/dynamic';
import Head from 'next/head';
import { DragDropContext } from 'react-beautiful-dnd';

const Players = dynamic(() => import('../components/Players'), { ssr: false })
const Positions = dynamic(() => import('../components/Positions'), { ssr: false })
import { resetServerContext } from "react-beautiful-dnd";
import useSelecao from '../store';


resetServerContext();

export default function Home() {
  const movePlayer = useSelecao(state => state.movePlayer);

  return (
    <div>
      <Head>
        <title>Zustand example</title>
      </Head>
      <DragDropContext onDragEnd={(result) => movePlayer(result)}>
        <div className="container">
          <Players />
          <Positions />
        </div>
      </DragDropContext>
    </div>
  )
}
