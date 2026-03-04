import Tag from "../Tag"
import { Card, Titulo, Descricao } from './styles'
import Button from "../Button"
import { FaStar } from 'react-icons/fa'

type Props = {
  title: string
  description: string
  image: string
  nota: number
  infos?: string[]
  cardapio?: 'home' | 'pizza'
}

const Products = ({
  title,
  description,
  image,
  nota,
  infos,
  cardapio = 'home'
}: Props) => {

  const buttonText =
    cardapio === 'pizza'
      ? 'Adicionar ao carrinho'
      : 'Saiba mais'

  return (
    <Card $cardapio={cardapio}>
      <img src={image} alt={title} />

      <div className="infos-tags">
        {infos?.map((info, index) => (
          <Tag key={`${info}-${index}`}>{info}</Tag>
        ))}
      </div>

      <div className="title-rating">
        <Titulo $cardapio={cardapio}>{title}</Titulo>
        <span className="rating">
          {nota}
          <span className="star">★</span>
        </span>
      </div>

      <Descricao $cardapio={cardapio}>
        {description}
      </Descricao>

        <Button
            type="link"
            to="/"
            title={buttonText}
            $cardapio={cardapio}  >
            {buttonText}
  </Button>
    </Card>
  )
}

export default Products