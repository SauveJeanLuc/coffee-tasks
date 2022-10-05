import React from 'react';
import { useTasks } from '../hooks/useTasks';
import { TaskItem } from './TaskItem';

export const ListTask = () => {

    const { tasks } = useTasks();

    return (
        <>
            <div className='grid gap-2 md:grid-cols-2 sm:grid-cols-1'>
                {tasks.map(task => (
                    <TaskItem key={task.title} task={task} />
                ))}
            </div>
        </>
    )
}
