import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface AddItemProps {
    onAdd: (text: string) => void
}

export const AddItem: React.SFC<AddItemProps> = ({
    onAdd
}) => {
    let inputElRef: HTMLInputElement
    const handleSubmit = event => {
        event.preventDefault()
        onAdd(inputElRef.value)
        inputElRef.value = ''
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <button
                    type="submit"
                >
                    <FontAwesomeIcon icon='plus-circle' />
                </button>
                <input
                    type='text'
                    placeholder='Add To-Do'
                    ref={(input) => inputElRef = input} />
            </form>
        </>
    )
}