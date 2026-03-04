import React from 'react'
import {HeaderBar} from './styles'
import logo from '../../assets/images/logo.png'


const PerfilHeader = () => (
  <HeaderBar>
    <div className='container'>
      <p>Restaurante</p>
     <img src={logo} alt="logo efood" />
     <p> 0 produto(s) no carrinho</p>
     </div>
     <div>
      <img src="./assets/images/apresentacao.png" alt="" />
     </div>
  </HeaderBar>
)

export default PerfilHeader