import React, { useState } from 'react'
import FormGroup from '../../components/FormGroup'
import { headers } from '../../core/request'
import './styled.css'

const RegisterItem = () => {
  const [barCode, setBarCode] = useState('')
  const [name, setName] = useState('')
  const [model, setModel] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [costPrice, setCostPrice] = useState()
  const [salePrice, setSalePrice] = useState()
  const [stock, setStock] = useState()
  const [category, setCategory] = useState('')

  const onSubmit = () => {
    const data = {
      barCode,
      name,
      model,
      manufacturer,
      costPrice,
      salePrice,
      stock,
      category,
    }

    fetch('http://localhost:2000/register', { method: 'POST', ...headers, body: data})
  }

  return (
    <div className='RegisterItemContainer'>
      <form className='RegisterItemForm'>
        <FormGroup
          id='barCode'
          name='barCode'
          value={barCode}
          onChange={setBarCode}
          label='Código de barras'
          placeholder='Insira o código de barras'
          type='number'
        />
        <FormGroup
          id='name'
          name='name'
          value={name}
          onChange={setName}
          label='Nome da peça'
          placeholder='Insira o nome da peça'
        />
        <FormGroup
          id='model'
          name='model'
          value={model}
          onChange={setModel}
          label='Modelo'
          placeholder='Insira o modelo do carro'
        />
        <FormGroup
          id='manufacturer'
          name='manufacturer'
          value={manufacturer}
          onChange={setManufacturer}
          label='Fabricante'
          placeholder='Insira o nome do fabricante'
        />
        <FormGroup
          id='costPrice'
          name='costPrice'
          value={costPrice}
          onChange={setCostPrice}
          label='Preço de Custo'
          type='number'
          placeholder='Insira o preço de custo'
        />
        <FormGroup
          id='salePrice'
          name='salePrice'
          value={salePrice}
          onChange={setSalePrice}
          label='Preço de venda'
          type='number'
          placeholder='Insira o preço de venda'
        />
        <FormGroup
          id='stock'
          name='stock'
          value={stock}
          onChange={setStock}
          label='Quantidade em estoque'
          placeholder='Insira a quantidade em estoque'
          type='number'
        />
        <FormGroup
          id='category'
          name='category'
          value={category}
          onChange={setCategory}
          label='Categoria'
          placeholder='Insira a categoria'
          type='number'
        />
        <div className='ButtonContainer'>
          <button
            type='button'
            onClick={onSubmit}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterItem
