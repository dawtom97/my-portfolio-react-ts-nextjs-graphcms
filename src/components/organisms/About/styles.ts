import styled from 'styled-components';

export const Container = styled.div`
   background-color: ${({theme})=>theme.primaryFade};
   
`

export const InnerWrapper = styled.div`
    margin:0 auto;
    display: flex;
    gap:20px;
    padding: 40px 20px 30px;
    flex-direction: column;
   width:90%;
   max-width: 1444px;

   & p {
    font-size: 1.6rem !important;
    @media screen and (min-width:768px) {
        font-size: 1.8rem !important;
   }
   }


   @media screen and (min-width:768px) {
     flex-direction: row;
     gap:50px;
   }


`