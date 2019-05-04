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
        <li>
            <label>
                <input type="checkbox"
                    onChange={onTick}
                />
                <span style={{
                    textDecoration: isCompleted ? 'line-through' : 'none'
                }}>{text}</span>
            </label>
            <button
                onClick={onDelete}
            >
                <FontAwesomeIcon icon='trash-alt' />
            </button>
        </li>
    )