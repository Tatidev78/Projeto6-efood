import styled from "styled-components";
import { Link } from "react-router-dom";

type ButtonProps = {
  $cardapio?: "home" | "pizza";
};

export const ButtonContainer = styled.button<ButtonProps>`
 background-color: ${({ $cardapio }) =>
    $cardapio === "pizza" ? "#FFF8F2" : "#FF6670"};
  color: ${({ $cardapio }) =>
    $cardapio === "pizza" ? "#E66767" : "#FFF8F2"};

  width: ${({ $cardapio }) => ($cardapio === "pizza" ? "100%" : "auto")};
  display: ${({ $cardapio }) => ($cardapio === "pizza" ? "block" : "inline-block")};
  margin: ${({ $cardapio }) => ($cardapio === "pizza" ? "0" : "8px")};
  align-self: ${({ $cardapio }) => ($cardapio === "pizza" ? "stretch" : "flex-start")};

  padding: 6px 12px;
  font-size: 12px;
  font-weight: bold; 
  border: none;
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

  width: ${({ $cardapio }) => ($cardapio === "pizza" ? "100%" : "auto")};
  display: ${({ $cardapio }) => ($cardapio === "pizza" ? "block" : "inline-block")};
  margin: ${({ $cardapio }) => ($cardapio === "pizza" ? "0" : "8px")};
  align-self: ${({ $cardapio }) => ($cardapio === "pizza" ? "stretch" : "flex-start")};
  text-align: center;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: bold; 
  border: none;
  text-decoration:none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;