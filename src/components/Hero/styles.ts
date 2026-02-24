import styled from 'styled-components';
import fundo from '../../assets/images/fundo.png';
import { TagContainer } from '../Tag/styles';

export const HeroBar = styled.div`
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  padding: 40px 0;

    .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

`;