import { DropResult } from 'react-beautiful-dnd';
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware';
import { PLAYERS } from '../constants';

interface Player {
  name: string;
  number: number;
  photo?: string;
}

interface SelecaoState {
  players: Player[];
  goalkeepers: Player[];
  defenders: Player[];
  fullbacks: Player[];
  midfields: Player[];
  forwards: Player[];
  movePlayer: (result: DropResult) => void;
}

type SelecaoStateKey = keyof SelecaoState;

const useSelecao = create<SelecaoState>()(devtools(persist((set) => ({
  players: PLAYERS,
  goalkeepers: [],
  defenders: [],
  fullbacks: [],
  midfields: [],
  forwards: [],
  movePlayer: (result) => set((state) => {
    if (result.destination) {
      const oldListKey = result.source.droppableId as SelecaoStateKey;
      const newListKey = result.destination.droppableId as SelecaoStateKey;

      const oldList = [...state[oldListKey] as Player[]];
      const [removed] = oldList.splice(result.source.index, 1);

      const newList = oldListKey === newListKey ?
        [...oldList] :
        [...state[newListKey as SelecaoStateKey] as Player[]];
      newList.splice(result.destination.index, 0, removed);

      return { [oldListKey]: oldList, [newListKey]: newList };
    }
    return state
  }),
}), {
  name: 'selecao-storage'
})));

export default useSelecao;