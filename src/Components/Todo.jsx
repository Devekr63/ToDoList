import React, { useState } from 'react'
import ListItems from './ListItems'
import './Todo.css'

function Todo () {

    const [listItems, setListItems] = useState([])
    const [newItem, setNewItem] = useState("")

    function newItemHandler(e) {
        setNewItem(e.target.value)
    }

    function addItemToList(){
        setListItems(
            [
                ...listItems, {newItem}
            ]
        )
        // console.log(listItems.length)
    }



    return(
        <div id='list--container' >
            <ul id='list--data'>
                {listItems.map(item => 
                    (<li><ListItems item = {item}/></li>)
                )}
            </ul>
            <textarea id='textArea' placeholder='Enter items' onChange={(e) => newItemHandler(e)}></textarea>
            <button onClick={addItemToList}>Add to List</button>
        </div>
    )
}

export default Todo