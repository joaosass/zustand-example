import Head from 'next/head'
import Players from '../components/Players'
import Positions from '../components/Positions';
import { DragDropContext } from 'react-beautiful-dnd';
import { resetServerContext } from "react-beautiful-dnd";


resetServerContext();

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zustand example</title>
      </Head>
      <DragDropContext onDragEnd={() => null}>
        <div className="container">
          <Players />
          <Positions />
        </div>
      </DragDropContext>
    </div>
  )
}
