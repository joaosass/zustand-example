import { Droppable, Draggable } from 'react-beautiful-dnd';

import useSelecao from "../store";

const Positions = () => {
  const {
    goalkeepers,
    defenders,
    fullbacks,
    midfields,
    forwards
  } = useSelecao(state => ({
    goalkeepers: state.goalkeepers,
    defenders: state.defenders,
    fullbacks: state.fullbacks,
    midfields: state.midfields,
    forwards: state.forwards
  }));

  const columns = [
    {
      title: 'Goleiros',
      data: goalkeepers,
      columnId: 'goalkeepers',
    },
    {
      title: 'Zagueiros',
      data: defenders,
      columnId: 'defenders',
    },
    {
      title: 'Laterais',
      data: fullbacks,
      columnId: 'fullbacks',
    },
    {
      title: 'Meias',
      data: midfields,
      columnId: 'midfields',
    },
    {
      title: 'Atacantes',
      data: forwards,
      columnId: 'forwards',
    },
  ]

  return <>
    {columns.map((column) => {
      return <div key={column.columnId} className="column">
        <h2>{column.title}</h2>
        <Droppable droppableId={column.columnId}>
          {(provided) => (
            <div className="content" {...provided.droppableProps} ref={provided.innerRef}>
              {column.data.map((player, index) => <Draggable draggableId={player.name} key={player.name} index={index}>
                {(provided, snapshot) =>
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={provided.draggableProps.style}
                  >
                    {player.photo ? <img src={player.photo} alt={player.name} /> : <p>{player.name}</p>}
                  </div>}
              </Draggable>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    })}
  </>
};

export default Positions;
