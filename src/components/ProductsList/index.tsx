import Products from "../Products";
import {Container, List} from "./styles"
import {Prato} from '../../types'
import { useState } from 'react'
import Modal from '../Modal'

export type Props ={
    title?: string
    pratos: Prato[]
    cardapio?: "home" | "pizza"
}

const ProductsList = ({title, pratos, cardapio}: Props) => {
    console.log('PRATOS:', pratos)

const [modalEstaAberto, setModalEstaAberto] = useState(false)

const [pratoSelecionado, setPratoSelecionado] =
  useState<Prato | null>(null)

const abrirModal = (prato: Prato) => {
  if (cardapio === 'pizza') {
    setPratoSelecionado(prato)
    setModalEstaAberto(true)
  }
}

const fecharModal = () => {
  setModalEstaAberto(false)
}
    return (
        <Container>
            <div className="container">
                <h2>{title}</h2>
            <List $cardapio={cardapio}>
                {pratos.map((prato) => (
                    <li key={prato.id}>
                        <Products  title={prato.title} description={prato.description} image={prato.image} nota={Number (prato.nota)} infos={prato.infos} cardapio={cardapio} onClick={() => abrirModal(prato)}/>
                    </li>
                ))}
            </List>
            </div>
            {modalEstaAberto && pratoSelecionado && (
            <Modal
                prato={pratoSelecionado}
                fecharModal={fecharModal}
            />
            )}
        </Container>
    )
}

export default ProductsList;