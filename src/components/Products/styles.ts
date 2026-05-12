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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.73);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
`

export const Modal = styled.div`
  width: 1024px;

  background: #E66767;

  padding: 32px;

  position: relative;

  display: flex;
  gap: 24px;

  img {
    width: 280px;
    height: 280px;

    object-fit: cover;
  }

  .modal-content {
    color: white;

    display: flex;
    flex-direction: column;
  }

  .close {
    position: absolute;

    top: 8px;
    right: 8px;

    background: transparent;

    border: none;

    color: white;

    cursor: pointer;

    font-size: 18px;
  }

  .modal-content button {
    margin-top: 16px;

    background: #FFEBD9;

    border: none;

    padding: 8px;

    font-weight: bold;

    cursor: pointer;
  }
`

