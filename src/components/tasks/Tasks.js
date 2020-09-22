import React from 'react';
import Task from "../task/Task";
import {Col, Container, Row} from "react-bootstrap";

const tasksData = [
  {
    title: 'wash hands',
    isCompleted: false,
    createdAt: '24.09.1984'
  },
  {
    title: 'wash hands',
    isCompleted: true,
    createdAt: '24.09.1984'
  },
  {
    title: 'wash hands',
    isCompleted: false,
    createdAt: '24.09.1984'
  }
];

let tasks = tasksData.map((task, taskNumber) => <Task {...task} key={taskNumber} />);

const Tasks = () => {
  return (
    <Container>
      <Row>
        <Col xs={8}>Task Title</Col>
        <Col xs={4}>CreatedAt</Col>
      </Row>
      {tasks}
    </Container>
  );
};

export default Tasks;