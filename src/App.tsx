import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle, faTrashAlt, faListUl } from '@fortawesome/free-solid-svg-icons'
import { TodoList } from './view/components/todoList/todoList'

library.add(
  faPlusCircle,
  faTrashAlt,
  faListUl
)

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
