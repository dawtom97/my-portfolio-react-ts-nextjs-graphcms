import styled from 'styled-components';
import { BannerTextProps } from './BannerText';


export const Container = styled.main<BannerTextProps>`
   text-align:${({isHeading})=> isHeading ? 'center': 'left'};
   flex:2;
   @media screen and (min-width:768px) {
      text-align: left;
   }
   & > p {
    font-size: 2.2rem;
    @media screen and (min-width:768px) {
      width:70%;
   }
   }

   & > p:first-of-type {
    font-size: 2.8rem;
    @media screen and (min-width:768px) {
      font-size: 3.2rem;
   }

   }
   & > h1, & > h2 {
    font-size: 3.2rem;
    margin-bottom: 12px;
    @media screen and (min-width:768px) {
      font-size: 5.5rem;
   }

    & > span {
      color:${({theme})=>theme.primary}
    }
   }
`

export const ButtonsBox = styled.div<BannerTextProps>`
  display: flex;
  flex-wrap: wrap;

  gap:15px;
  margin-top: 20px;
  justify-content:center;
  @media screen and (min-width:768px) {
      justify-content: initial;
   }
`