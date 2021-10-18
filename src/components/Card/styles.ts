import styled from "styled-components";

export const Container = styled.div`
    height: 200px;
    margin:20px;
    border-radius: 5px;
    background-color: #A4A4A4;
`;

export const Header = styled.div`
    height:40px;
    z-index: -1;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    -webkit-box-shadow: 0px 0px 3px 0.1px #000000;
    -moz-box-shadow: 0px 0px 3px 0.1px #000000;
    box-shadow: 0px 0px 3px 0.1px #000000;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
        color: #363636;
        font-weight: 700;
        padding: .75rem 1rem;
        font-size: 18px;
    }
`;


export const Content = styled.div`

  height: 120px;
  width: 100%;
  align-items: center;

  > div{
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      color:black;
  }

  div:nth-child(2){
      display: flex;

      span{
          padding: 5px;
          margin:5px;
          border-radius: 4px;
          background-color: #fff09d;
          color:black;
          font-size: .75rem;
          height: 2em;
          align-items: center;
          padding-left: .75em;
          padding-right: .75em;
      }
  }

`;

export const Footer = styled.div`
   height: 40px;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   border-bottom-right-radius: 5px;
   border-bottom-left-radius: 5px;
   -webkit-box-shadow: 0px 0px 3px 0.1px #000000;
   -moz-box-shadow: 0px 0px 3px 0.1px #000000;
    box-shadow: 0px 0px 3px 0.1px #000000;
   
   a{
       align-items: center;
       display: flex;
       justify-content: center;
   }
`;