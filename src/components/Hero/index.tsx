import React from 'react'
import { HeroBar } from './styles'
import logo from '../../assets/images/logo.png'


const Hero = () => (
  <HeroBar>
    <div className='container'>
     <img src={logo} alt="logo efood" />
     <p>Viva experiências gastronômicas no conforto da sua casa</p>
     </div>
  </HeroBar>
)

export default Hero