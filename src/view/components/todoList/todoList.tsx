import * as React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import { TodoListItem } from '../todoListItem/todoListItem'
import { actions } from '../../../core/actions'
import {
    getUser,
    getTodoListName,
    getTodoListItems
} from '../../../core/selectors'

import { User } from '../../../core/models/user'
import { TodoItem } from '../../../core/models/todoItem'
import { AddItem } from '../addItem/addItem';

interface TodoListProps {
    user: User
    todoListName: string
    todoListItems: TodoItem[]
    toggleCompleted: (id: string) => void
    deleteItem: (id: string) => void
    addItem: (text: string) => void
}

export const TodoListBase: React.SFC<TodoListProps> = ({
    user,
    todoListItems,
    todoListName,
    toggleCompleted,
    deleteItem,
    addItem
}) => {
    const dateNow = moment().format('ddd D MMMM')
    return (
        <Row className='TodoListCard'>
            <Col xs={3}>
                <Row className='Profile'>
                    <Image src={process.env.PUBLIC_URL + user.imagePath} alt='user_img' roundedCircle />
                    <h6 className='PaddingLeft'>
                        {user.name}
                    </h6>
                </Row>
                <Row className='ProfileList'>
                    <FontAwesomeIcon
                        icon='list-ul' />
                    <h6 className='PaddingLeft'>
                        {todoListName}
                    </h6>
                </Row>
            </Col>
            <Col xs={9}>
                <Row className='TodoListHeader'>
                    <h3>{todoListName}</h3>
                    <p>{dateNow}</p>
                </Row>
                <Row>
                    {todoListItems.map(todo => {
                        return (
                            <TodoListItem
                                key={todo.id}
                                text={todo.text}
                                isCompleted={todo.isCompleted}
                                onTick={() => toggleCompleted(todo.id)}
                                onDelete={() => deleteItem(todo.id)} />
                        )
                    })}
                </Row>
                <Row>
                    <AddItem
                        onAdd={addItem} />
                </Row>
            </Col>
        </Row>
    )
}

const mapStateToProps = createStructuredSelector({
    user: getUser,
    todoListName: getTodoListName,
    todoListItems: getTodoListItems
})

const mapDispatchToProps = dispatch => ({
    toggleCompleted: (id: string) => dispatch(actions.toggleCompleted(id)),
    deleteItem: (id: string) => dispatch(actions.deleteTodoItem(id)),
    addItem: (text: string) => dispatch(actions.addTodoItem(text))
})

export const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListBase)
