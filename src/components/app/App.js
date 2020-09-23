import React from 'react';


import './App.css';
import Tasks from "../tasks/Tasks";
import CreateTask from "../createTask/CreateTask";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="App">
      <Tasks/>
      <CreateTask />
    </Container>
  );
}

export default App;
