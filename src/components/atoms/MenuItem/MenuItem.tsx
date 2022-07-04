import Link from 'next/link';
import { FC } from 'react';

type MenuItemProps = {
    link:string,
    text:string
}

export const MenuItem:FC<MenuItemProps> = ({link,text}) => (
  <li>
    <Link href={link}>{text}</Link>
  </li>
);
