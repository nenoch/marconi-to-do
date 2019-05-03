import { compose, prop, defaultTo } from 'lodash/fp'
import { defaultState } from './reducer'

export const todoState = compose(
  defaultTo(defaultState),
  prop('todoState')
)

export const getTodoListItems = compose(
  prop('todoItems'),
  todoState
)

export const getTodoListName = compose(
  prop('todoListName'),
  todoState
)

export const getUser = compose(
  prop('user'),
  todoState
)
