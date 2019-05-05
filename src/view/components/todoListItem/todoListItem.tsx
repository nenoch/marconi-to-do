import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface TodoItemProps {
    text: string
    isCompleted: boolean
    onTick: () => void
    onDelete: () => void
}

export const TodoListItem: React.SFC<TodoItemProps> = ({
    text,
    isCompleted,
    onTick,
    onDelete
}) => (
        <div className='TodoListItem'>
            <input type="checkbox"
                onChange={onTick}
            />
            <h6
                className='PaddingLeft'
                style={{
                    textDecoration: isCompleted ? 'line-through' : 'none'
                }}>{text}</h6>
            <button
                className='BorderNone'
                onClick={onDelete}
            >
                <FontAwesomeIcon icon='trash-alt' />
            </button>
        </div>
    )