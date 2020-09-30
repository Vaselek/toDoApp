import React from 'react';
import {Form, Col, Row} from 'react-bootstrap';
import './Task.css';
import {updateTask} from "../../store/tasks";
import {useDispatch} from "react-redux";

const Task = ({...task}) => {

  const dispatch = useDispatch();

  const toggleTaskCompleteness = () => {
    task.isCompleted = !task.isCompleted;
    dispatch(updateTask(task));
  };


  return (
    <Row className='task'>
      <Col xs={2}>
        <Form>
          <Form.Check defaultChecked={task.isCompleted} onClick={toggleTaskCompleteness} type='checkbox'/>
        </Form>
      </Col>
      <Col className={task.isCompleted ? 'completedTask' : ''} xs={6}>{task.title}</Col>
      <Col xs={4}>{task.created_at}</Col>
    </Row>
  );
};

export default Task;