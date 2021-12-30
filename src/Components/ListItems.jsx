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
    }

    return (
            <>
                {toEdit 
                    ?   <span>
                            <input 
                                onChange={(event) => onChangeHandler(event)}
                                placeholder='new item'
                            />
                            <button onClick={saveHandler} id='save--btn'>
                                📝
                            </button>
                        </span>
                    : <button id='edit--btn' onClick={clickHandler}>✏️</button>
                }            
                
                <button id='remove--btn' onClick={() => {props.remove(props.idx)}}>❎</button>
            </>
    )
}

export default ListItems
