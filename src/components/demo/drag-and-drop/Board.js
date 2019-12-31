import React, { useState } from 'react';
import swap from '../../utils/swap';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
export default function Board() {
  const initialData = {
    tasks: {
      task1: { id: 'task1', content: 'task1' },
      task2: { id: 'task2', content: 'task2' },
      task3: { id: 'task3', content: 'task3' },
      task4: { id: 'task4', content: 'task4' },
      task5: { id: 'task5', content: 'task5' },
      task6: { id: 'task6', content: 'task6' },
      task7: { id: 'task7', content: 'task7' },
      task8: { id: 'task8', content: 'task8' }
    },
    columns: {
      column1: {
        id: 'column1',
        title: 'todo',
        taskIds: ['task1', 'task2']
      },
      column2: {
        id: 'column2',
        title: 'doing',
        taskIds: ['task3', 'task4']
      },
      column3: {
        id: 'column3',
        title: 'done',
        taskIds: ['task5', 'task6', 'task7', 'task8']
      }
    },
    columnOrder: ['column1', 'column2', 'column3']
  };

  const [data, setData] = useState(initialData);

  function onDragEnd(res) {
    const { destination, source, draggableId } = res;

    swap(destination, source, draggableId, setData, data);
  }

  return (
    <section className='board'>
      <DragDropContext onDragEnd={onDragEnd}>
        {data.columnOrder.map(columnId => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map(taskId => data.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    </section>
  );
}
