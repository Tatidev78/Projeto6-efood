import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0,0,0,0.7);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
`

export const Container = styled.div`
  width: 1024px;
  max-width: 90%;

  background-color: #E66767;

  padding: 32px;

  display: flex;
  gap: 24px;

  position: relative;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`

export const Content = styled.div`
  color: #fff;

  h2 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    margin-bottom: 16px;
  }

  button {
    background-color: #FFEBD9;
     color: #E66767;
    border: none;

    padding: 8px 12px;

    font-weight: bold;

    cursor: pointer;
  }
`

export const CloseButton = styled.button`
  position: absolute;

  top: 16px;
  right: 16px;

  background: transparent;
  border: none;

  color: white;

  font-size: 18px;

  cursor: pointer;
`