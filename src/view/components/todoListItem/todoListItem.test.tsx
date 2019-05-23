import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TodoListItem } from './todoListItem';

configure({ adapter: new Adapter() });

describe('TodoListItem', () => {
    let component;
    const mockOnTick = jest.fn();
    mockOnTick.mockReturnValue(42);
    const mockOnDelete = jest.fn();
    const mockProps = {
        text: 'test text',
        isCompleted: false,
        onTick: mockOnTick,
        onDelete: mockOnDelete
    };
    beforeEach(() => {
        component = shallow(<TodoListItem {...mockProps} />);
    });
    it("As a user, I can mark todo items on my 'Team To-Do List' as complete, and they should visually delineate themselves as being different from non-completed items", () => {
        expect(mockOnTick.mock.calls.length).toEqual(0);
        component.find('input').simulate('change');
        expect(mockOnTick.mock.calls.length).toEqual(1);
        component.setProps({ isCompleted: true });
        expect(component.find('.Completed')).toHaveLength(1);
    });
    it("As a user, I can delete todo items from my 'Team To-Do List' list", () => {
        expect(mockOnDelete.mock.calls.length).toEqual(0);
        component.find('button').simulate('click');
        expect(mockOnDelete.mock.calls.length).toEqual(1);
    });
});