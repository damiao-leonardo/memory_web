import styled, { css } from "styled-components";

import Tooltip from '../Tooltip';

interface ContainerProps{
   isFocused: boolean;
   isFilled: boolean;
   isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
       border-radius: 10px;
       border: 2px solid #E0E8F9;
       padding: 16px;
       width: 100%; 
       color:#666360;

       display: flex;
       align-items: center;

       & + div {
          margin-top: 8px;
       }

       ${props =>props.isErrored && css`
          border-color: #c53030;
          color: blue;
       `}

       ${props => props.isFocused && css `
         color: #A6ACFA;
         border-color: #A6ACFA;
       `}

       ${props => props.isFilled && css `
         color: #A6ACFA;
       `}

    input{

       flex:1;
       background: transparent;
       border:0;

       &::placeholder{
          color:#666360;
       }

       & + input {
          margin-top:8px;
       }

      }

      svg{
         margin-right: 5px;
      }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;