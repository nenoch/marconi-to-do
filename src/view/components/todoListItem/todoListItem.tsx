import * as React from 'react'

interface TodoItemProps {
    text: string
    isCompleted: boolean
    onClick: () => void
}

export const TodoListItem: React.SFC<TodoItemProps> = ({
    text,
    isCompleted,
    onClick
}) => {
    console.log('isCompleted', isCompleted)
    return (
    <li
    onClick={onClick}
    style={{
        textDecoration: isCompleted ? 'line-through' : 'none'
    }}
    >
        {text}
    </li>
)}