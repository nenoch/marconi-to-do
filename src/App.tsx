import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import { TodoList } from './view/components/todoList/todoList'

class App extends React.Component {
  render() {
    return (
      <Container>
          <TodoList />
      </Container>
    );
  }
}

export default App;
