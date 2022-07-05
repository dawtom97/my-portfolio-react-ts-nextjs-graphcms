import Link from 'next/link';
import { FC, ReactNode } from 'react';
import * as Styled from './styles'

type MenuItemProps = {
    link:string,
    children:ReactNode,
}

export const MenuItem:FC<MenuItemProps> = ({link,children}) => {

  return(
  <Styled.Item >
    <Link  href={link}>{children}</Link>
  </Styled.Item>
);
  }