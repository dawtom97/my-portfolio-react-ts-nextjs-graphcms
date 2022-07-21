import styled from 'styled-components';

export const Container = styled.div`
   background-color: ${({ theme }) => theme.grey};
   
`

export const InnerWrapper = styled.div`
    margin:0 auto;
    display: flex;
    gap:20px;
    padding: 40px 20px 30px;
    flex-direction: column;
   width:85%;
   align-items: center;
   max-width: 1444px;

   & p {
    font-size: 1.6rem !important;
    @media screen and (min-width:992px) {
        font-size: 1.8rem !important;
   }
   }


   @media screen and (min-width:992px) {
     flex-direction: row;
     gap:50px;
   }


`