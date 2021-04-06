import React, {useState} from 'react';
import TaskForm from "./TaskForm";
import {useDispatch} from "react-redux";
import {createTask} from "../../store/tasks";
import {useTaskEditing} from "../hooks/useTaskEditing";

const CreateTask = () => {

  const { task, clearTaskForm, editTaskForm } = useTaskEditing();
  const dispatch = useDispatch();

  const handleCreateTask = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = new FormData(e.currentTarget);
    const newTask = {...task};

    for (let pair of form.entries()) {
      newTask[pair[0]] = pair[1]
    }

    newTask.createdAt = new Date().toISOString();
    await dispatch(createTask(newTask));
    clearTaskForm();
  };

  return (
    <div>
      <TaskForm task={task} handleChange={editTaskForm} handleSubmit={handleCreateTask}/>
    </div>
  );
};

export default CreateTask;