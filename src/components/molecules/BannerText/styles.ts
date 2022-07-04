import styled from 'styled-components';
import { BannerTextProps } from './BannerText';


export const Container = styled.main<BannerTextProps>`
   text-align:${({isHeading})=> isHeading ? 'center': 'left'};
   & > p:first-of-type {
    font-size: 2.8rem;
   }
   & > h1, & > h2 {
    font-size: 3.2rem;
    margin-bottom: 12px;

    & > span {
      color:${({theme})=>theme.primary}
    }
   }
`

export const ButtonsBox = styled.div<BannerTextProps>`
  display: flex;
  gap:15px;
  margin-top: 20px;
  justify-content:${({isHeading})=> isHeading ? 'center': 'initial'};
`