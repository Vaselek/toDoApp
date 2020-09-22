import React from 'react';
import { Row } from 'react-bootstrap';
import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";

import './Task.css';

const Task = ({...task}) => {
  return (
    <Row className='task'>{task.isCompleted ? <CompletedTask {...task}/> : <NewTask {...task}/>}</Row>
  );
};

export default Task;