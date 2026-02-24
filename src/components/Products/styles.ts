import styled from 'styled-components';
import { cores } from '../../styles';
import { TagContainer } from '../Tag/styles';

export const Card = styled.div`
background-color: ${cores.fundo};
border: 1px solid ${cores.vermelhoSuave};
width:100%;
padding: 16px;
position: relative;

img {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 16px;

${TagContainer} {
margin-right: 8px;
}
`

export const Titulo = styled.h3`
color: ${cores.vermelhoSuave};
font-size: 18px;
font-weight:bold;
display: block;
margin-top: 8px;
margin-bottom: 8px;`

export const Descricao = styled.p`
color: ${cores.vermelhoSuave};
font-size: 14px;
line-height: 20px;
display: block;
margin: 45px 8px;
`