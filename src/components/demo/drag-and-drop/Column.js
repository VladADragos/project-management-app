import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import TaskList from './TaskList';

export default function Column({ column, tasks }) {
  return (
    <section className='column'>
      <h2 className='column__title'>{column.title}</h2>
      <Droppable droppableId={column.id}>
        {provided => (
          <TaskList
            placeholder={provided.placeholder}
            innerRef={provided.innerRef}
            {...provided.droppableProps}
            tasks={tasks}
            id={column.id}>
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </section>
  );
}
