import styled from 'styled-components';
import { cores } from '../../styles';

export type CardProps ={
  cardapio?: 'home' | 'pizza'
}

export const Card = styled.div<{ $cardapio?: "home" | "pizza" }>`
    position: relative;

    background-color: ${({ $cardapio }) =>
    $cardapio === "pizza" ? "#E66767" : "#FFFFFF"};

    border: 1px solid ${cores.vermelhoSuave};
    overflow:hidden;
    margin:0 8px;
    display:flex;
    flex-direction: column;
    gap: 8px;

img {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 0;
}
.infos-tags {
    position: absolute;
    top:8px; 
    right: 8px;
    display: flex;
    gap: 8px; 
  }

  .title-rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 8px;
  }

  .rating {
    font-weight: bold;
    color: ${({ $cardapio }) =>
    $cardapio === "pizza" ? "#FFFFFF" : cores.vermelhoSuave};
  }

  .star {
  color: ${({ $cardapio }) =>
    $cardapio === "pizza" ? "#FFFFFF" : "#FFB930"};
  }

  button {
    margin:0 8px;
  }
`

export const Titulo = styled.h3<{ $cardapio?: "home" | "pizza" }>`
  color: ${({ $cardapio }) =>
    $cardapio === "pizza" ? "#FFFFFF" : cores.vermelhoSuave};
    font-size: 18px;
    font-weight:bold;
    margin:0 8px;`

export const Descricao = styled.p<{ $cardapio?: "home" | "pizza" }>`
  color: ${({ $cardapio }) =>
    $cardapio === "pizza" ? "#FFFFFF" : cores.vermelhoSuave};
    font-size: 14px;
    line-height: 20px;
    margin:0 8px;`