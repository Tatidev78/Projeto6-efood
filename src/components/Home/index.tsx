import ProductsList from '../ProductsList'
import comida_japa1 from '../assets/images/comida_japa1.png'
import comida_italiana1 from '../assets/images/comida_italiana1.png'

type Prato = {
  id: number
  title: string
  description: string
  image: string
  nota: number
  infos: string[]
}

const pratos: Prato[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: comida_japa1,
    nota: 4.5,
    infos: ['Japonesa', 'Destaque']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comida_italiana1,
    nota: 4.7,
    infos: ['italiana']
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comida_italiana1,
    nota: 4.7,
    infos: ['italiana']
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comida_italiana1,
    nota: 4.7,
    infos: ['italiana']
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comida_italiana1,
    nota: 4.7,
    infos: ['italiana']
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comida_italiana1,
    nota: 4.7,
    infos: ['italiana']
  }
]

const Home = () => (
  <ProductsList title="Restaurantes" pratos={pratos} />
)

export default Home