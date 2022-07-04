import Link from 'next/link';
import { FC } from 'react';
import * as Styled from './styles'

type MenuItemProps = {
    link:string,
    text:string
}

export const MenuItem:FC<MenuItemProps> = ({link,text}) => (
  <Styled.Item>
    <Link href={link}>{text}</Link>
  </Styled.Item>
);
