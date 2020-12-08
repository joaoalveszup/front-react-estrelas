import React from 'react'
import './styled.css'

const Item = (props) => {
  const { name, salePrice, stock, image } = props

  return (
    <section className='itemContainer'>
      <img className='itemImage' src={image} />
      <div className='itemInfo'>
        <span className='itemName'>
          {name}
        </span>
        <span>
          Preço: {salePrice}
        </span>
        <span>
          Estoque: {stock}
        </span>
      </div>
    </section>
  )
}

export default Item
