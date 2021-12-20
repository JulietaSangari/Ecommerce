import React from 'react'
import Item from "../components/Item"

export default function ItemList({items}){
    return(
        <div className='row'>
            {items && items.map((item) =>(
                <Item key={item.id}item={item}/>
            ))}
        </div>
    )
}