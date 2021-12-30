import { isDisabled } from '@testing-library/user-event/dist/utils'
import React, { useState, useEffect } from 'react'
import './listItem.css'

function ListItems(props) {

    const [toEdit, setEdit] = useState(false)
    const [newItem, setNewItem] = useState("")

    const clickHandler = () => {
        setEdit(true)
    }

    const onChangeHandler = (event) => {
        setNewItem(event.target.value)
    }

    const saveHandler = () => {
        props.edit(newItem, props.idx)
        setEdit(false)
        setNewItem("")
    }

    return (
            <>
                {toEdit 
                    ?   <span>
                            <input 
                                onChange={(event) => onChangeHandler(event)}
                                placeholder='new item'
                                className='editTask'
                                value={newItem}
                            />
                            <button 
                                onClick={saveHandler}   
                                id='save--btn' 
                                className='save' 
                                disabled = {newItem ? false : true}
                            >
                                📝
                            </button>
                        </span>
                    : <button id='edit--btn' className='edit' onClick={clickHandler} >✏️</button>
                }            
                
                <button id='remove--btn' className='delete' onClick={() => {props.remove(props.idx)}}>❎</button>
            </>
    )
}

export default ListItems
