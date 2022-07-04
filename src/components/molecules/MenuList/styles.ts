import styled, { css } from 'styled-components';
import { MenuListProps } from './MenuList';


const OPEN = css`
  transform:translateX(0);
`


export const Container = styled.ul<MenuListProps>`
  color: #fff;
  display: flex;
  list-style: none;
  gap: 18px;
  position: fixed;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  padding: 50px 30px;
  min-height: 100vh;
  top:0;
  left: 0;
  background-color: ${({theme})=>theme.primarySemiTransparent};
  z-index: 99;
  width: 100%;

  & > li {
    margin-bottom: 10px;
  }

  transform:translateX(-100%);
  transition: 0.5s;
  @media screen and (min-width:768px) {
    display: flex;
    position: initial;
    min-height: initial;
    flex-direction: row;
    background-color: transparent;
    width: initial;
    padding: 0;
    transform:translateX(0);
    & > li {
      margin:0;
    }
  }

  ${({isOpen}) => isOpen && OPEN}
`