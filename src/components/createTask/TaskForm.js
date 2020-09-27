import React from 'react';
import { Form } from 'react-bootstrap';



const TaskForm = ({ task, handleSubmit, handleChange }) => {
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Row>
        <Form.Group>
          <Form.Control name='title' onChange={handleChange} value={task.title} type="text" placeholder="Type new task..." />
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

export default TaskForm;