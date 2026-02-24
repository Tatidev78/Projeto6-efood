import styled from "styled-components";

export const Container = styled.section`
padding: 32px 0;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))
  column-gap: 40px;
  margin-top: 40px;
  list-style: none;
  padding: 0;

  li{
  width: 100%;
  } `

export const Title = styled.h2`
font-size: 18px;
font-weight:bold;
`
