import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFEBD9',
  preto: '#111111',
  vermelhoSuave: '#FF6B6B',
  fundo: '#FFF8F2',
  fundoTag: '#E66767'  
}

export const GlobalCss = createGlobalStyle`
 * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Roboto', sans-serif; list-style: none; }

  body{
  background-color: ${cores.fundo};
  color: ${cores.vermelhoSuave};
  padding-top: 0;
  }

.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;}
`

export default GlobalCss