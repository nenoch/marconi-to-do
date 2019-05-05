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
        <div>
            <form onSubmit={handleSubmit}>
                <button
                    className='BorderNone'
                    type="submit"
                >
                    <FontAwesomeIcon icon='plus-circle' />
                </button>
                <input
                    className='BorderNone'
                    type='text'
                    placeholder='Add To-Do'
                    ref={(input) => inputElRef = input} />
            </form>
        </div>
    )
}