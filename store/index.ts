import create from 'zustand'

interface SelecaoState {
  players: string[];
  setPlayers: (players: string[]) => void;
  goalkeepers: string[];
  setGoalkeepers: (goalkeepers: string[]) => void;
  defenders: string[];
  setDefenders: (defenders: string[]) => void;
  fullbacks: string[];
  setFullbacks: (fullbacks: string[]) => void;
  midfields: string[];
  setMidfields: (midfields: string[]) => void;
  forwards: string[];
  setForwards: (forwards: string[]) => void;
}

const useSelecao = create<SelecaoState>((set) => ({
  players: ['Alisson', 'Ederson', 'Weverton', 'Danilo', 'Alex Sandro', 'Daniel Alves', 'Alex Telles', 'Militão', 'Marquinhos', 'Thiago Silva', 'Bremer', 'Bruno Guimarães', 'Casemiro', 'Fabinho', 'Fred', 'Paquetá', 'Everton Ribeiro', 'Neymar', 'Vinicius Júnior', 'Antony', 'Rodrygo', 'Raphinha', 'Richarlison', 'Pedro', 'Gabriel Jesus', 'Gabriel Martinelli'],
  setPlayers: (players: string[]) => set(() => ({ players })),
  goalkeepers: [],
  setGoalkeepers: (goalkeepers: string[]) => set(() => ({ goalkeepers })),
  defenders: [],
  setDefenders: (defenders: string[]) => set(() => ({ defenders })),
  fullbacks: [],
  setFullbacks: (fullbacks: string[]) => set(() => ({ fullbacks })),
  midfields: [],
  setMidfields: (midfields: string[]) => set(() => ({ midfields })),
  forwards: [],
  setForwards: (forwards: string[]) => set(() => ({ forwards })),
}))

export default useSelecao;