import styled from 'styled-components';
import { NavbarProps } from './Navbar';






export const Container = styled.nav`
  display: flex;
  background-color: ${({theme})=>theme.primary};
  min-height: 85px;

`

export const InnerWrapper = styled.div<NavbarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:0 auto;
  width:90%;
  max-width: 1444px;
  
  & > a {
    font-family: Nova mono;
    font-size: 3rem;
    color: #fff;
    position: relative;
    text-decoration: none;
    &::after {
      content: "";
      position: absolute;
      width:100%;
      height: 100%;
      bottom: -8px;
    left: -15px;
    border-left: 5px solid #fff;
    border-bottom: 5px dotted #fff;
    }
  }
  & > div.hamburger-react {
    z-index: 100;
  }

  @media screen and (min-width:768px) {
    
    div.hamburger-react {
        display: none;
    }
  }
`