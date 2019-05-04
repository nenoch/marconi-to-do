import { compose, prop } from 'lodash/fp'
import { TodoStateType } from './reducer';

const root = (state: TodoStateType) => state

export const getTodoListItems = compose(
  prop('todoItems'),
  root
)

export const getTodoListName = compose(
  prop('todoListName'),
  root
)

export const getUser = compose(
  prop('user'),
  root
)
