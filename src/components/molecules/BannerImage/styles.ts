import styled from 'styled-components';


export const Container = styled.div`
   position: relative;
    min-height: 310px;
    margin: 0 auto;
    width: 70%;
    flex:1;
    &::before {
      content: "";
      position: absolute;
      width:100%;
      height: 100%;
      bottom: -15px;
    right: -15px;
    border-right: 5px dotted ${({theme})=>theme.text};;
    border-bottom: 5px dotted ${({theme})=>theme.primary};;
    }
    &::after {
      content: "";
      position: absolute;
      width:100%;
      height: 100%;
      bottom: -25px;
    right: -25px;
    border-right: 5px solid ${({theme})=>theme.primary};
    border-bottom: 5px solid ${({theme})=>theme.text};
    }
    @media screen and (min-width:768px) {
      min-height: 700px;
      width: 100%;
   }

   & > span {
    border-radius: 15px;
  
   }

   /* &::after {
    content: "";
    width: 150vw;
    top: 30px;
    left: -182px;
    height: 100%;
    z-index: -1;
    position: absolute;
    background: linear-gradient(131deg,rgb(255,255,255),rgb(255,255,255) 60%,rgba(251,63,92,50%) 60%,rgba(251,63,92,50%));
   } */
  
`