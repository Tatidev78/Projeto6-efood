import styled from 'styled-components';
import { cores } from '../../styles';

export type CardProps = {
  cardapio?: 'home' | 'pizza'
}

export const Card = styled.div<{ $cardapio?: "home" | "pizza" }>`
  box-sizing: border-box;
  width: 100%;
  min-height: 360px;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: ${({ $cardapio }) => ($cardapio === "pizza" ? "8px" : "0")};

  background-color: ${({ $cardapio }) =>
    $cardapio === "pizza" ? cores.vermelhoSuave : "#FFFFFF"};

  border: 1px solid ${cores.vermelhoSuave};

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    display: block;
    margin-bottom: 8px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 8px;
    flex: 1;
  }

  .infos-tags {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    gap: 8px;
  }

  .title-rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.vermelhoSuave};
  }

  .star {
    color: ${cores.vermelhoSuave};
  }

  button {
    display: block;
    width: 100%;
    border: none;
    padding: 4px 0;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;

    margin-top: auto;

    background-color: ${({ $cardapio }) =>
      $cardapio === "pizza" ? "#FFEBD9" : cores.vermelhoSuave};

    color: ${({ $cardapio }) =>
      $cardapio === "pizza" ? cores.vermelhoSuave : "#FFEBD9"};
  }
`;

export const Titulo = styled.h3<{ $cardapio?: "home" | "pizza" }>`
  color: ${({ $cardapio }) =>
    $cardapio === "pizza" ? "#FFEBD9" : cores.vermelhoSuave};

  font-size: 18px;
  line-height: 100%;
  font-weight: bold;
  margin: 0;
`;

export const Descricao = styled.p<{ $cardapio?: "home" | "pizza" }>`
  color: ${({ $cardapio }) =>
    $cardapio === "pizza" ? "#FFEBD9" : cores.vermelhoSuave};

  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin: 0;
`;