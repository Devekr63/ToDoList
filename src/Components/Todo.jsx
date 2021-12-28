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
        if(newItem !== ""){
            setListItems(
                [
                    ...listItems, newItem
                ]
            )
            document.getElementById("textArea").value = ""
            setNewItem("")
        }
    }

    const removeItem = (id) =>{
        console.log("index to remove : "+id)
        setListItems((prev) => {
            console.log(prev)
            return prev.filter((ele, index) => {
                return id !== index
            })
        })
    }

    const editItem = (resetItem, id) => {
        setListItems((prev) => {
            return prev.map((ele, index) => {
                if(index === id)
                    return resetItem
                return ele
            })
        })
    } 

    return(
        <div id='list--container' >
            <ul id='list--data'>
                {listItems.map((item,index) => {
                    return (<li id='list--items' key={index+item}>
                        {item}
                        <ListItems 
                            idx={index}
                            item={item} 
                            remove={removeItem}
                            edit={editItem}
                        />
                    </li>
                )})}
            </ul>
            <textarea id='textArea' placeholder='Enter items' onChange={(e) => newItemHandler(e)}></textarea>
            <button onClick={addItemToList}>Add to List</button>
        </div>
    )
}

export default Todo