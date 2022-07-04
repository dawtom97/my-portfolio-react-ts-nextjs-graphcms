import styled from 'styled-components';


export const Container = styled.div`
   position: relative;
    padding: 30px;
    min-height: 310px;
    margin: 30px 45px 25px 45px;

   & > span {
    border-radius: 15px;
   }

   &::after {
    content: "";
    width: 150vw;
    top: 30px;
    left: -182px;
    height: 100%;
    z-index: -1;
    position: absolute;
    background: linear-gradient(131deg,rgb(255,255,255),rgb(255,255,255) 60%,rgba(251,63,92,50%) 60%,rgba(251,63,92,50%));
   }
  
`