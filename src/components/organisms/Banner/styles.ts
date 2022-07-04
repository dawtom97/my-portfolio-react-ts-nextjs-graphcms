import styled from 'styled-components';


export const Container = styled.div`
  min-height: 570px;
`

export const InnerWrapper = styled.div`
   margin:0 auto;
   width:90%;
   max-width: 1444px;
   display: flex;
   flex-direction: column;
   gap: 40px;
   @media screen and (min-width:768px) {
      flex-direction: row;
   }

`