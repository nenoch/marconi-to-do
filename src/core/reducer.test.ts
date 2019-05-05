import { expect } from 'chai'
import { reducer, TodoStateType } from './reducer'
import { actions } from './actions'

const mockUser = {
    id: '5678',
    name: 'Guglielmo Marconi',
    imagePath: '/marconi.png'
}

const mockTodoitem = {
    text: 'Water the office plants',
    isCompleted: false
}

let mockTodoId;

describe('[todo/reducer]', () => {
    describe('addTodoItem', () => {
        it('should add a new todoItem to the state', () => {
            const mockState: TodoStateType = {
                user: mockUser,
                todoListName: 'Team To-Do List',
                todoItems: []
            }
            const newState = reducer(mockState, actions.addTodoItem('Water the office plants'));
            mockTodoId = newState.todoItems[0].id;
            const nextState = {
                ...mockState,
                todoItems: [{
                    ...mockTodoitem,
                    id: mockTodoId
                }]
            }
            expect(newState).to.deep.equal(nextState);
        })
    })
    describe('toggleCompleted', () => {
        it('should set a isCompleted on the todoItem to true', () => {
            const mockState: TodoStateType = {
                user: mockUser,
                todoListName: 'Team To-Do List',
                todoItems: [{
                    ...mockTodoitem,
                    id: mockTodoId
                }]
            }
            const newState = reducer(mockState, actions.toggleCompleted(mockTodoId));
            const nextState = {
                ...mockState,
                todoItems: [{
                    ...mockTodoitem,
                    id: mockTodoId,
                    isCompleted: true
                }]
            }
            expect(newState).to.deep.equal(nextState);
        })
        it('should set a isCompleted on the todoItem to false when toggled twice', () => {
            const mockState: TodoStateType = {
                user: mockUser,
                todoListName: 'Team To-Do List',
                todoItems: [{
                    ...mockTodoitem,
                    id: mockTodoId,
                    isCompleted: true
                }]
            }
            const newState = reducer(mockState, actions.toggleCompleted(mockTodoId));
            const nextState = {
                ...mockState,
                todoItems: [{
                    ...mockTodoitem,
                    id: mockTodoId,
                    isCompleted: false
                }]
            }
            expect(newState).to.deep.equal(nextState);
        })
    })
    describe('toggleCompleted', () => {
        it('should delete a todoItem from the state', () => {
            const mockState: TodoStateType = {
                user: mockUser,
                todoListName: 'Team To-Do List',
                todoItems: [{
                    ...mockTodoitem,
                    id: mockTodoId
                }]
            }
            const newState = reducer(mockState, actions.deleteTodoItem(mockTodoId));
            const nextState = {
                ...mockState,
                todoItems: []
            }
            expect(newState).to.deep.equal(nextState);
        })
    })
})