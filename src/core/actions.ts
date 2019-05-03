export enum ActionTypes {
  ADD = '@todoItem/ADD',
  DELETE = '@todoItem/DELETE',
  TOGGLE_COMPLETED = '@todoItem/TOGGLE_COMPLETED',
}

export const actions = {
  addTodoItem: (text: string) => ({ type: ActionTypes.ADD, payload: { text } }),
  deleteTodoItem: (id: string) => ({ type: ActionTypes.DELETE, payload: { id } }),
  toggleCompleted: (id: string) => ({ type: ActionTypes.TOGGLE_COMPLETED, payload: { id } })
}