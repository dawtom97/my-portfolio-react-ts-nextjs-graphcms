import styled from 'styled-components';


export const Container = styled.div`
   margin:30px 0;
   @media screen and (min-width:768px) {
      margin:60px 0;
   }
`

export const InnerWrapper = styled.div`
   margin:0 auto;
   width:90%;
   max-width: 1444px;
   display: flex;
   flex-direction: column;
   gap: 40px;
   @media screen and (min-width:768px) {
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      min-height: 600px;
   }

`