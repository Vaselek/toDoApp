import React, {useState} from 'react';
import TaskForm from "./TaskForm";
import {useDispatch} from "react-redux";
import {createTask} from "../../store/tasks";



const CreateTask = () => {

  const taskTemplate = {
    title: '',
    isCompleted: false,
    created_at: ''
  };

  const dispatch = useDispatch();
  const [task, setTask] = useState(taskTemplate);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = new FormData(e.currentTarget);
    const newTask = {...task};

    for (let pair of form.entries()) {
      newTask[pair[0]] = pair[1]
    }

    newTask.created_at = new Date().toISOString();

    await dispatch(createTask(newTask));

    clearState();
  };

  const clearState = () => {
     setTask(taskTemplate);
  };

  const handleChangeTask = (e) => {
    const updatedTask = {...task};
    updatedTask[e.target.name] = e.target.value;
    setTask(updatedTask);
  };

  return (
    <div>
      <TaskForm task={task} handleChange={handleChangeTask} handleSubmit={handleCreateTask}/>
    </div>
  );
};

export default CreateTask;