import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AddItem } from './addItem';

configure({ adapter: new Adapter() });

describe('AddItem', () => {
    const mockOnAdd = jest.fn();
    let component;
    beforeEach(() => {
        component = shallow(<AddItem onAdd={mockOnAdd} />);
    });
    it("As a user, I can add new todo items to my 'Team To-Do List' list", () => {
        expect(component.exists()).toBeTruthy;
    });
});