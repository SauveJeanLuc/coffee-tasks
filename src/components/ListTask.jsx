import React from 'react';
import { useTasks } from '../hooks/useTasks';
import { TaskItem } from './TaskItem';

export const ListTask = () => {

    const { tasks } = useTasks();

    return (
        <>
            {tasks.map(task => (
                <TaskItem key={task.title} task={task} />
            ))}
        </>
  )
}
