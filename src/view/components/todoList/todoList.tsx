import * as React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
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

interface TodoListProps {
    user: User
    todoListName: string
    todoListItems: TodoItem[]
    toggleCompleted: (id: string) => void
}

export const TodoListBase: React.SFC<TodoListProps> = ({
    user,
    todoListItems,
    todoListName,
    toggleCompleted
}) => {
    const dateNow = moment().format('ddd D MMMM')
    return (
        <Row className='TodoListCard'>
            <Col xs={3}>
                <Row className='ProfileCol'>
                    <Image src={process.env.PUBLIC_URL + user.imagePath} alt='user_img' roundedCircle />
                    <h6>{user.name}</h6>
                </Row>
                <h6>{todoListName}</h6>
            </Col>
            <Col xs={9}>
                <Row className='ListHeader'>
                    <h3>{todoListName}</h3>
                    <p>{dateNow}</p>
                </Row>
                <Row>
                    <ul>
                        {todoListItems.map(todo => {
                            return (
                                <TodoListItem
                                    key={todo.id}
                                    text={todo.text}
                                    isCompleted={todo.isCompleted}
                                    onClick={() => toggleCompleted(todo.id)} />
                            )
                        })}
                    </ul>
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

const mapDispatchToProps = (dispatch: any) => ({
    toggleCompleted: (id: string) => dispatch(actions.toggleCompleted(id))
})

export const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListBase)
