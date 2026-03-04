import styled from "styled-components";

export const Container = styled.section`
  padding: 32px 0;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const List = styled.ul<{ $cardapio?: "home" | "pizza" }>`
  display: grid;

  grid-template-columns: ${({ $cardapio }) =>
    $cardapio === "pizza"
      ? "repeat(3, 1fr)"
      : "repeat(2, 1fr)"};

  gap: 32px;
  margin-top: 40px;
  list-style: none;
  padding: 0;

  li {
    width: 100%;
  }
`

export const Title = styled.h2`
font-size: 18px;
font-weight:bold;
`
