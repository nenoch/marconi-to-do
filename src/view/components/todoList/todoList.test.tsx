import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from 'react-bootstrap/Image'
import { TodoListBase } from './todoList';
import { TodoListItem } from '../todoListItem/todoListItem';
import { defaultState } from '../../../core/reducer';
const {
    user,
    todoItems,
    todoListName
} = defaultState;

configure({ adapter: new Adapter() });

describe('TodoList', () => {
    let component;
    const mockProps = {
        user: user,
        todoListName: todoListName,
        todoListItems: todoItems,
        toggleCompleted: () => {},
        deleteItem: () => {},
        addItem: () => {}
    };
    beforeEach(() => {
        component = shallow(<TodoListBase {...mockProps} />);
    });
    it('As a user, I can see an area containing a list of todo lists. This area has 1 fixed list', () => {
        expect(component.find('.ProfileList').find('h6').text()).toEqual('Team To-Do List');
    });
    it('As a user, I can see my profile pic and username', () => {
        expect(component.find(Image).prop("src")).toEqual('/marconi.png');
        expect(component.find('.Profile').find('h6').text()).toEqual('Guglielmo Marconi');
    });
    it('As a user, I can view all of my current todo list items in my “Team To-Do List” list, if any exist', () => {
        expect(component.find(TodoListItem)).toHaveLength(1);
    });
});