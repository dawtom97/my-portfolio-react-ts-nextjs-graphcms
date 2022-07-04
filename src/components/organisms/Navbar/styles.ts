import styled from 'styled-components';
import { NavbarProps } from './Navbar';

export const Container = styled.nav`
  display: flex;
  background-color: ${({theme})=>theme.primary};
  min-height: 55px;
`

export const InnerWrapper = styled.div<NavbarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:0 auto;
  width:90%;
  max-width: 1444px;
  
  & > div.hamburger-react {
    z-index: 100;
  }

  @media screen and (min-width:768px) {
    
    div.hamburger-react {
        display: none;
    }
  }
`