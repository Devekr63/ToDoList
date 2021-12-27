import React, { useState } from 'react'

function ListItems(props) {

    const [listItem, setListItem] = useState(props.item)

    return (
            <>
                {listItem}
                <button>Edit</button>
                <button>Remove</button>
            </>
    )
}

export default ListItems
