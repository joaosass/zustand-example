import useSelecao from '../store';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Players = () => {
  const players = useSelecao(state => state.players);

  return <div className="column">
    <h2>Convocados</h2>
    <Droppable droppableId="player">
      {(provided, snapshot) => (
        <div className="content" {...provided.droppableProps} ref={provided.innerRef}>
          {players.map((player, index) =>
            <Draggable draggableId={player} key={player} index={index}>
              {(provided, snapshot) => (
                <p
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={provided.draggableProps.style}
                >
                  {player}
                </p>
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
