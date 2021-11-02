import styled from "styled-components";

export const Header = styled.div`
  display:flex;
  height:60px;
  width: 100vw;
  position: relative;
  z-index: 9999;
`;

export const Brand = styled.div`
   
   display: flex;
   align-items: center;

   > a {
    padding:12px;
    img{
      width: 28px;
      height: 28px;
    }
  }

`;
export const Menu = styled.div`
    display: flex;
    align-items: center;
    flex:1;
`;


export const Start = styled.div` 
    a{
        font-size: 18px;
        padding-left: 20px;
        text-decoration: none;
        color: #4a4a4a;
        line-height: 1.5;
        padding: .5rem .75rem;   
    }

`;
export const End= styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  margin-right: 20px;

  button{
        height: 30px;
        width: 60px;
        font-size: 18px;
        color: #4a4a4a;
        line-height: 1.5;
        padding: 0;
        border: none;
        background: none;
  }
`;

export const Search = styled.div`

   > Form {
    margin: 20px;
    > div {
      padding: 5px;
      border-color: #3d5a80;
      border-radius: 5px;
      Input{
        height: 30px;
      } 
    }
   }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;


export const AddCard = styled.div`

    float: right;
    width: 80px;
    height: 30px;
    margin: 0px 40px 0px 0px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    overflow:auto;

    button{
      width: 100%;
      height: 100%;
      background-color: #A4A4A4;
      color:black;
      border-radius: 5px;
      border:1px solid #ccc;
      font-size:16px;
      color: #4a4a4a;
    }

`;