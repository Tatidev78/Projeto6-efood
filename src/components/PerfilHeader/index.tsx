import React from 'react'
import { Link } from 'react-router-dom'
import {HeaderBar, Banner} from './styles'
import logo from '../../assets/images/logo.png'


const PerfilHeader = () => (
  <>
  <HeaderBar>
    <div className='container'>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2>Restaurantes</h2>
        </Link>

     <img src={logo} alt="logo efood" />
     <h2> 0 produto(s) no carrinho</h2>
     </div>
  </HeaderBar>
  <Banner>
      <div className="container">
        <h3>Italiana</h3>
        <h2>La Dolce Vita Trattoria</h2>
      </div>
    </Banner>
  </>
)

export default PerfilHeader