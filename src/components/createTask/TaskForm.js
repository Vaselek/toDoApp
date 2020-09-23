import React from 'react';
import { Form } from 'react-bootstrap';



const TaskForm = ({ handleSubmit }) => {

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Row>
        <Form.Group>
          <Form.Control name='title' type="text" placeholder="Type new task..." />
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

export default TaskForm;