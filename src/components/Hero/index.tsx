import React from 'react'
import {Link} from 'react-router-dom'
import { HeroBar } from './styles'
import logo from '../../assets/images/logo.png'


const Hero = () => (
  <HeroBar>
    <div className='container'>
     <img src={logo} alt="logo efood" />
     <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
     <Link to="/pizza" className='cta'>Ver Pizzas</Link>
     </div>
  </HeroBar>
)

export default Hero