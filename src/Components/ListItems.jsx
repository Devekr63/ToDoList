import React, { useState } from 'react'

function ListItems(props) {

    return (
            <>
                <button onClick={() => {props.edit("edited" ,props.idx)}}>edit</button>
                <button onClick={() => {props.remove(props.idx)}}>Remove</button>
            </>
    )
}

export default ListItems
