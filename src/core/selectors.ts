import { compose, prop } from 'lodash/fp'

const root = (state: any) => state

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