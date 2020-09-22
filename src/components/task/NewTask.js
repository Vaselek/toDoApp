import React, {Fragment} from 'react';
import { Col } from 'react-bootstrap';

const NewTask = ({...task}) => {
  return (
    <Fragment>
        <Col xs={8}>{task.title}</Col>
        <Col xs={4}>{task.createdAt}</Col>
    </Fragment>
  );
};

export default NewTask;