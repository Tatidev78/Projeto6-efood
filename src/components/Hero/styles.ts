import styled from 'styled-components';
import fundo from '../../assets/images/fundo.png';

export const HeroBar = styled.div`
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  padding: 40px 0;

    .container {
    height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
  }
    h1{
      font-size:36px;
      font-weight: 900;
      width: 550px;
      margin-bottom:30px;
    }

    .cta {
    display: inline-block;
    margin-top: 24px;
    padding: 10px 20px;
    background-color: #e66767;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    transition: 0.3s;
  }

  .cta:hover {
    background-color: #c44545;
    transform: scale(1.05);
  

`;