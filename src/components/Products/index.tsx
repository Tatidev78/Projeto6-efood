import Tag from "../Tag"
import { Card, Titulo, Descricao} from './styles'

type Props = {
    title: string
    description: string
    image: string
    nota: number
    infos: string[]
    button: string
}

const Products = ({title, description, image, nota, infos, button}: Props) => (
        <Card>
            <img src={image} alt={title} />
            <div className="infos-tags">
            {infos?.map((info) => (
                <Tag key={info}>{info}</Tag>
            ))}
            </div>
            <Titulo>{title}</Titulo>
            <Tag>{nota}</Tag>
            <Descricao>{description}</Descricao>
            <button>{button}</button>
        </Card>
    )


export default Products