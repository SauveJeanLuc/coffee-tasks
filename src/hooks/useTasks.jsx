
import { useContext, useEffect } from 'react';
import { TaskContext } from '../context/Task/TaskContext';
import { UiContext } from '../context/ui/UiContext';

export const useTasks = () => {
    const { tasks,
        setTasks,
        status,
        setStatus,
        currentTask,
        setCurrentTask,
    } = useContext(TaskContext);

    const { handlePopUp } = useContext(UiContext);

    const handleInputChange = (e) => {
        setCurrentTask(e.target.value);
    };

    const resetFields = () => {
        setStatus('');
        setCurrentTask('');
    }

    const addTask = () => {
        if (status == "" || currentTask == "") {
            alert("both Title and status are mandatory !");
        } else {

            const newTask = {
                title: currentTask,
                status: status.value
            };

            setTasks(prevState => [...prevState, newTask]);
            handlePopUp();
            // window.location.reload(false);
        }
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));

    }, [tasks])



    return {
        tasks,
        status,
        handleInputChange,
        addTask,
        setStatus,
        currentTask,
        resetFields
    }
}

