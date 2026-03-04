import Products from "../Products";
import {Container, List} from "./styles"
import {Prato} from '../../types'

export type Props ={
    title?: string
    pratos: Prato[]
    cardapio?: "home" | "pizza"
}

const ProductsList = ({title, pratos, cardapio}: Props) => {
    console.log('PRATOS:', pratos)

    return (
        <Container>
            <div className="container">
                <h2>{title}</h2>
            <List $cardapio="pizza">
                {pratos.map((prato) => (
                    <li key={prato.id}>
                        <Products  title={prato.title} description={prato.description} image={prato.image} nota={Number (prato.nota)} infos={prato.infos} cardapio={cardapio}/>
                    </li>
                ))}
            </List>
            </div>
        </Container>
    )
}

export default ProductsList;