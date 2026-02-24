import Products from "../Products";
import GlobalCss from "../../styles";
import {Container, List} from "./styles"

interface Prato {
  id: number | string;
  title: string;
  description: string;
  image: string;
  nota: number | string;
  infos: string[];
}

export type Props ={
    title: string
    pratos: Prato[]
}

const ProductsList = ({title, pratos}: Props) => {
    return (
        <Container>
            <div className="container">
                <h2>{title}</h2>
            <List>
                {pratos.map((prato) => (
                    <Products key={prato.id} title={prato.title} description={prato.description} image={prato.image} nota={Number (prato.nota)} infos={prato.infos} button="Saiba mais"/>
                ))}
            </List>
            </div>
        </Container>
    )
}

export default ProductsList;