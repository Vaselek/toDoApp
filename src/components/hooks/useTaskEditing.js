import { useState } from "react";

export const useTaskEditing = () => {

  const taskTemplate = {
    title: '',
    isCompleted: false,
    createdAt: ''
  };

  const [task, setTask] = useState(taskTemplate);

  const editTaskForm = (e) => {
    const updatedTask = {...task};
    updatedTask[e.target.name] = e.target.value;
    setTask(updatedTask);
  };

  const clearTaskForm = () => setTask(taskTemplate);

  return { task, clearTaskForm, editTaskForm }
};