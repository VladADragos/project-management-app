import React from 'react';
import Task from './Task';
export default function TaskList({ tasks, id, innerRef, children }) {
  return (
    <div className='task-list' ref={innerRef}>
      {tasks.map((task, index) => (
        <Task task={task} index={index} key={task.id} />
        // <h2>helo</h2>
      ))}
      {children}
    </div>
  );
}
