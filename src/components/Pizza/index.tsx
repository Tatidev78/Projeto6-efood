import PerfilHeader from '../PerfilHeader'
import ProductsList from '../ProductsList'
import { Prato } from '../../types'
import pizza3 from '../../assets/images/pizza3.png'

const pratos: Prato[] = [
  {
    id: 7,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza3,
    nota: 5.0,
    infos:[]
  },
  {
    id: 8,
    title: 'Pizza Marguerita',
     description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza3,
    nota: 4.9,
    infos:[]
  },
  {
     id: 9,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza3,
    nota: 4.7,
    infos:[]
  },
  {
     id: 10,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza3,
    nota: 4.7,
    infos:[]
  },
  {
     id: 11,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza3,
    nota: 4.7,
    infos:[]
  },
  {
    id: 12,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza3,
    nota: 4.7,
    infos:[]
  }
]

const Pizza = () => (
  <>
    <PerfilHeader/>
    <ProductsList pratos={pratos} cardapio="pizza"/>
  </>
)

export default Pizza