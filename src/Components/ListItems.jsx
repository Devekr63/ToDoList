import React, { useState } from 'react'

function ListItems(props) {

    const [listItem, setListItem] = useState(props.item)

    return (
        <div>
            {listItem}
        </div>
    )
}

export default ListItems
