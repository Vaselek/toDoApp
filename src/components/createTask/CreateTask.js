import React from 'react';
import TaskForm from "./TaskForm";
import {useDispatch} from "react-redux";
import {createTask} from "../../store/tasks";



const CreateTask = () => {

  const dispatch = useDispatch();

  const handleCreateTask = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = new FormData(e.currentTarget);
    let task = {};

    for (let pair of form.entries()) {
      task[pair[0]] = pair[1]
    }

    task.isCompleted = false;
    task.createdAt = new Date();

    dispatch(createTask(task))
  };

  return (
    <div>
      <TaskForm handleSubmit={handleCreateTask}/>
    </div>
  );
};

export default CreateTask;