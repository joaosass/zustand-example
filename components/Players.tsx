import useSelecao from '../store';

const Players = () => {
  const players = useSelecao(state => state.players);
  const goalkeepers = useSelecao(state => state.goalkeepers);
  const setPlayers = useSelecao(state => state.setPlayers);
  const setGoalkeepers = useSelecao(state => state.setGoalkeepers);

  return <div>
    <h1>Convocados</h1>
    {players.map((player, index) => <p key={index}>{player}</p>)}
  </div>
};

export default Players;
