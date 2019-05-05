import { expect } from 'chai'
import {
    getTodoListItems,
    getTodoListName,
    getUser
} from './selectors'
import { TodoStateType } from './reducer';

const mockUser = {
    id: '5678',
    name: 'Guglielmo Marconi',
    imagePath: '/marconi.png'
}

const mockTodoitem = {
    id: '1234',
    text: 'shortlist feature for MVP',
    isCompleted: false
}

const mockState: TodoStateType = {
    user: mockUser,
    todoListName: 'Team To-Do List',
    todoItems: [mockTodoitem]
}

describe('[todo/selectors]', () => {
    describe('getTodoListName', () => {
        it('should return the list name', () => {
            expect(getTodoListName(mockState)).to.equal(mockState.todoListName)
        })
    })
    describe('getTodoListItems', () => {
        it('should return an array of to-do items', () => {
            expect(getTodoListItems(mockState)).to.deep.equal([mockTodoitem])
        })
    })
    describe('getUser', () => {
        it('should return the user object', () => {
            expect(getUser(mockState)).to.equal(mockUser)
        })
    })
})