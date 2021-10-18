import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: center;    
`;

export const Content = styled.div`

  width: 300px;
  height: 400px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content :center ;
  border-radius: 10px;

  img {
      width: 100px;
      height: 105px;
  }

  form{
   
     width: 250px;
     text-align: center;
     margin-top:16px;

      h1{
       margin: 24px 12px;
       color:black;
       font-size:18px;
      }

      button{

         background: #337AFF;
         color: #fff;
         border:0;
         border-radius: 10px;
         border: 2px solid #fff;
         font-weight: 500;
         padding: 0 16px;
         height: 56px;;
         padding: 16px;
         width: 100%;
         margin-top:16px;
         transition: background-color 0.2s;

         &:hover{
            background: ${shade(0.2, '#337AFF')};
         }

      }
   }
`;


