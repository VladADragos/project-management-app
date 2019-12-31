import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          className='task'>
          {task.content}
        </div>
      )}
    </Draggable>
  );
}
