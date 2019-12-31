export function swapInCol(destination, source, draggableId, setData, data) {
  const column = data.columns[source.droppableId];

  const newTaskIds = Array.from(column.taskIds);

  newTaskIds.splice(source.index, 1);
  newTaskIds.splice(destination.index, 0, draggableId);

  const newColumn = {
    ...column,
    taskIds: newTaskIds
  };

  // console.log(newColumn);
  const newState = {
    ...data,
    columns: {
      ...data.columns,
      [newColumn.id]: newColumn
    }
  };

  setData(newState);
}

export function swapBetweenCol(
  destination,
  source,
  draggableId,
  setData,
  data
) {
  const start = data.columns[source.droppableId];
  const finish = data.columns[destination.droppableId];

  const startTaskIds = Array.from(start.taskIds);
  startTaskIds.splice(source.index, 1);
  const newStart = {
    ...start,
    taskIds: startTaskIds
  };

  const finishTaskIds = Array.from(finish.taskIds);
  finishTaskIds.splice(destination.index, 0, draggableId);
  const newFinish = {
    ...finish,
    taskIds: finishTaskIds
  };

  const newState = {
    ...data,
    columns: {
      ...data.columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish
    }
  };

  setData(newState);
}

export function validDrop(d, s) {
  return (
    d !== null && !(d.droppableId === s.droppableId && d.index === s.index)
  );
}

export default function swap(destination, source, draggableId, setData, data) {
  if (validDrop(destination, source)) {
    if (destination.droppableId === source.droppableId) {
      swapInCol(destination, source, draggableId, setData, data);
    } else {
      swapBetweenCol(destination, source, draggableId, setData, data);
    }
  } else {
    return;
  }
}
