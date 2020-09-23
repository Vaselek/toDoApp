import React from 'react';
import Task from "../task/Task";
import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getTasks} from "../../store/tasks";
import useDeepCompareEffect from "use-deep-compare-effect";

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
  let { tasks } = useSelector(state=> state.tasks);

  useDeepCompareEffect(() => dispatch(getTasks()), [tasks]);

  let taskList = tasks.map((task, taskNumber) => <Task {...task} key={taskNumber} />);

  return (
    <Container>
      <Row>
        <Col xs={8}>Task Title</Col>
        <Col xs={4}>CreatedAt</Col>
      </Row>
      {taskList}
    </Container>
  );
}

export default Tasks;