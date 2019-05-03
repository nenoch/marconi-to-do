import uuid from 'uuid'
import { TodoItem } from './models/todoItem'

export const createTodo = (text: string): TodoItem => ({
    id: uuid.v4(),
    text,
    isCompleted: false
})