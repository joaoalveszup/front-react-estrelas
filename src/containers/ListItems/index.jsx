import React, { useState, useEffect } from 'react'
import './styled.css'
import { headers } from '../../core/request'
import Item from './Item'

const ListItems = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:2000/list', { method: 'GET', ...headers })
    .then(res => res.json())
    .then(
      (result) => {
        setItems(result)
      }
    )

  }, [])

  const renderItems = () => items?.map((item) => (
    <Item
      key={item.name}
      name={item.name}
      salePrice={item.salePrice}
      stock={item.stock}
      image={item.image}
    />
  ))

  return (
    <div className='listItemsContainer'>
      <div className='listItemsContent'>
        {renderItems()}
      </div>
    </div>
  )
}

export default ListItems