import React, {Fragment} from 'react';
import { Col } from 'react-bootstrap';

import './CompletedTask.css';

const CompletedTask = ({...task}) => {
  return (
    <Fragment>
      <Col className='completedTask' xs={8}>{task.title}</Col>
      <Col xs={4}>{task.createdAt}</Col>
    </Fragment>
  );
};

export default CompletedTask;