
import React, { useState } from 'react';
import { TaskContext } from './TaskContext';
import PropTypes from 'prop-types';

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState( JSON.parse(localStorage.getItem("tasks")) ?? [])
  const [status, setStatus] = useState("");
  const [currentTask, setCurrentTask] = useState("");

    return (
    <TaskContext.Provider value={{
        tasks,
        setTasks,
        status, 
        setStatus,
        currentTask, 
        setCurrentTask
    }}>
        {children}
    </TaskContext.Provider>
  )
}

TaskProvider.propTypes = {
    children: PropTypes.any
}