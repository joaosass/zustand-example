import useSelecao from '../store';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Players = () => {
  const players = useSelecao(state => state.players);

  return <div className="column">
    <h2>Convocados</h2>
    <Droppable droppableId="players">
      {(provided, snapshot) => (
        <div className="content" {...provided.droppableProps} ref={provided.innerRef}>
          {players.map((player, index) =>
            <Draggable draggableId={player.name} key={player.name} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={provided.draggableProps.style}
                >
                  {player.photo ? <img src={player.photo} alt={player.name} /> : <p>{player.name}</p>}
                </div>
              )}
            </Draggable>
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
};

export default Players;
