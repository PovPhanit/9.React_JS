import styled, { css } from "styled-components";

export const Div = styled.div`
  padding: 20px 20px;
  width: 100%;
  height: 100vh;
  ${props=> props.setColor==='Blue' && css`
    background-color:blue;
  `};
  ${props=> props.setColor==='Yellow' && css`
    background-color:yellow;
  `};
  ${props=> props.setColor==='Red' && css`
    background-color:red;
  `};

`;

Div.defaultProps = {
  setColor: "Red",
};
