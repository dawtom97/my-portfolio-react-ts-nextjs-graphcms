import styled, { css } from 'styled-components';
import { MenuListProps } from './MenuList';


const OPEN = css`
  transform:translateX(0);
`


export const Container = styled.ul<MenuListProps>`
  color: ${({ theme }) => theme.text};
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  gap: 35px;

  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
    line-height: 0;
  }

  & svg {
    font-size: 2.5rem;
    display: none;
    cursor: pointer;
    @media screen and (min-width:992px) {
       display: block;
    }
  }
`