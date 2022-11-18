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
  players: ['Alex Sandro', 'Alex Telles', 'Alisson', 'Antony', 'Bremer', 'Bruno Guimarães', 'Casemiro', 'Daniel Alves', 'Danilo', 'Ederson', 'Everton Ribeiro', 'Fabinho', 'Fred', 'Gabriel Jesus', 'Gabriel Martinelli', 'Marquinhos', 'Militão', 'Neymar', 'Paquetá', 'Pedro', 'Raphinha', 'Richarlison', 'Rodrygo', 'Thiago Silva', 'Vinicius Júnior', 'Weverton'],
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