import React from 'react'
import './styled.css' 
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav>
    <div className='linksContainer'>
      <Link to='/'>Início</Link>
      <Link to='/register'>Registrar Peça</Link>
      <Link to='/list'>Listar Peças</Link>
    </div>
  </nav>
)

export default Navbar