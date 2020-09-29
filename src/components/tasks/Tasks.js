import React, { useState, useEffect } from 'react';
import Task from "../task/Task";
import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getTasks} from "../../store/tasks";

// const tasksData = [
//   {
//     title: 'wash hands',
//     isCompleted: false,
//     createdAt: '24.09.1984'
//   },
//   {
//     title: 'wash hands',
//     isCompleted: true,
//     createdAt: '24.09.1984'
//   },
//   {
//     title: 'wash hands',
//     isCompleted: false,
//     createdAt: '24.09.1984'
//   }
// ];

function Tasks() {

  const dispatch = useDispatch();
  const { tasks } = useSelector( state => state.tasks );
  const [loaded, setLoaded] = useState(false);

  useEffect( () => {
    dispatch(getTasks())
    setLoaded(true)
  }, [loaded]);

  let newTaskList = tasks
    .filter(task => !task.isCompleted)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map((task) =>  <Task {...task} key={task.id} />);

  let completedTaskList = tasks
    .filter(task => task.isCompleted)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map((task) =>  <Task {...task} key={task.id} />);

  if (!loaded) {
    return (
      <div>EmptyList</div>
    )
  }

  return (
    <Container>
      <Row>
        <Col xs={8}>New Tasks</Col>
        <Col xs={4}>CreatedAt</Col>
      </Row>
      {newTaskList}
      <Row>
        <Col xs={8}>Completed tasks</Col>
        <Col xs={4}>CreatedAt</Col>
      </Row>
      {completedTaskList}
    </Container>
  );
}

export default Tasks;