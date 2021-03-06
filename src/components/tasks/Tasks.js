import React, { useState, useEffect } from 'react';
import Task from "../task/Task";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, newTasksSelector, completedTasksSelector } from "../../store/tasks";


function Tasks() {

  const dispatch = useDispatch();
  const newTasks = useSelector(newTasksSelector);
  const completedTasks = useSelector(completedTasksSelector);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(getTasks());
    setLoaded(true)
  }, [loaded, dispatch]);

  const listTasks = (tasks) => tasks
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
        <Col xs={4}>createdAt</Col>
      </Row>
      {listTasks(newTasks)}
      <Row>
        <Col xs={8}>Completed tasks</Col>
        <Col xs={4}>createdAt</Col>
      </Row>
      {listTasks(completedTasks)}
    </Container>
  );
}

export default Tasks;