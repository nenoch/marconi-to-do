import { ActionTypes } from './actions'
import { createTodo } from './utils'
import { TodoItem } from './models/todoItem'
import { User } from './models/user'


export interface TodoStateType {
  readonly user: User
  readonly todoListName: string
  readonly todoItems: TodoItem[]
}

const defaultUser = {
  id: '5678',
  name: 'Guglielmo Marconi',
  imagePath: '/marconi.png'
}

const todoitem = {
  id: '1234',
  text: 'example To-Do item',
  isCompleted: false
}

export const defaultState: TodoStateType = {
  user: defaultUser,
  todoListName: 'Team To-Do List',
  todoItems: [todoitem]
}

export const reducer = (
  state: TodoStateType = defaultState,
  action: { type: ActionTypes, payload: any }
): TodoStateType => {
  switch (action.type) {
    case ActionTypes.ADD: {
      const newTodo = createTodo(action.payload.text)
      const updatedList = state.todoItems.concat(newTodo)
      return {
        ...state,
        todoItems: updatedList
      }
    }
    case ActionTypes.DELETE: {
      const updatedList = state.todoItems.filter(
        item => item.id !== action.payload.id
      )
      return {
        ...state,
        todoItems: updatedList
      }
    }
    case ActionTypes.TOGGLE_COMPLETED: {
      const updatedList = state.todoItems.map(
        todo => todo.id === action.payload.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
      return {
        ...state,
        todoItems: updatedList
      }
    }
  }
  return state
}
