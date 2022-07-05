import styled from 'styled-components';
import { NavbarProps } from './Navbar';






export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 30px 40px;
  & > a {
    font-family: Nova mono;
    font-size: 3rem;
    margin-left: 10px;
    color: ${({ theme }) => theme.primary};
    position: relative;
    text-decoration: none;
    &::after {
      content: "";
      position: absolute;
      width:100%;
      height: 100%;
      bottom: -8px;
    left: -15px;
    border-left: 5px solid ${({ theme }) => theme.primary};
    border-bottom: 5px dotted ${({ theme }) => theme.primary};
    }
  }
  & > div.hamburger-react {
    z-index: 100;
  }

  @media screen and (min-width:992px) {
    
    div.hamburger-react {
        display: none;
    }
  }

`
