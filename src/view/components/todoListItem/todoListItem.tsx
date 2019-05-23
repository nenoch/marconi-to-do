import * as React from 'react'
import cx from 'classnames'
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
                className={cx(['PaddingLeft', isCompleted ? 'Completed' : null])}>
                {text}
            </h6>
            <button
                className='BorderNone'
                onClick={onDelete}
            >
                <FontAwesomeIcon icon='trash-alt' />
            </button>
        </div>
    )