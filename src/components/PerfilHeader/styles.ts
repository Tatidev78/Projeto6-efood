import styled from "styled-components";
import fundo from "../../assets/images/fundo.png"
import apresentacao from "../../assets/images/apresentacao.png"

export const HeaderBar = styled.div`
  
  min-height: 436px;
  background-image: url(${fundo}), url(${apresentacao});
  background-position: top center, bottom center;
  background-repeat: no-repeat, no-repeat;
  background-size: 100% 180px, 100% 280px ;
  padding: 40px 0;

  .container{
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items:center;
    font-size: 18px;
    font-weight: bold;
  }
`

