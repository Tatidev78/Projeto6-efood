import styled from "styled-components"

export const FooterContainer = styled.footer`
  background-color: #FFEBD9;
  padding: 40px 0;

  .container {
        margin-top:40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
  }

    ul {
        list-style: none;
        display: flex;
        gap: 16px;
        padding: 0;
    }

    li {
        margin-top:32px;
        align-items:center;
        background-color: #E66767;
        color: #fff;
        padding: 8px;
        border-radius: 50px;
    }

    p {
        margin-top:80px;
        font-size: 10px;
        color: #E66767;
        text-align: center;
        max-width: 480px;
}

  `