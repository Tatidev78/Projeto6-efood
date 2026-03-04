import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

type ButtonProps = {
  $cardapio?: "home" | "pizza";
};

export const ButtonContainer = styled.button<ButtonProps>`
 background-color: ${({ $cardapio }) =>
    $cardapio === "pizza" ? "#FFF8F2" : "#FF6670"};
  color: ${({ $cardapio }) =>
    $cardapio === "pizza" ? "#E66767" : "#FFFFFF"};
  padding: 6px 12px;
  font-size: 12px;
  font-weight: bold; 
  margin: 8px;
  display: inline-block;
  align-self: flex-start;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const ButtonLink = styled(Link)<ButtonProps>`
  background-color: ${({ $cardapio }) =>
    $cardapio === "pizza" ? "#FFF8F2" : "#FF6670"};
  color: ${({ $cardapio }) =>
    $cardapio === "pizza" ? "#E66767" : "#FFFFFF"};
  padding: 6px 12px;
  font-size: 12px;
  font-weight: bold; 
  text-decoration: none;
  margin: 8px;
  display: inline-block;
  align-self: flex-start;
  border-radius: 6px;

  &:hover {
    opacity: 0.9;
  }
`;