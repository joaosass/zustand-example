import useSelecao from "../store";

const Positions = () => {
  const goalkeepers = useSelecao(state => state.goalkeepers);
  const defenders = useSelecao(state => state.defenders);
  const fullbacks = useSelecao(state => state.fullbacks);
  const midfields = useSelecao(state => state.midfields);
  const forwards = useSelecao(state => state.forwards);

  return <div>
    <h2>Goleiros</h2>
    {goalkeepers.map((goalkeeper, index) => <p key={index}>{goalkeeper}</p>)}
    <h2>Zagueiros</h2>
    {defenders.map((defender, index) => <p key={index}>{defender}</p>)}
    <h2>Laterais</h2>
    {fullbacks.map((fullback, index) => <p key={index}>{fullback}</p>)}
    <h2>Meias</h2>
    {midfields.map((midfield, index) => <p key={index}>{midfield}</p>)}
    <h2>Atacantes</h2>
    {forwards.map((forward, index) => <p key={index}>{forwards}</p>)}
  </div>
};

export default Positions;
