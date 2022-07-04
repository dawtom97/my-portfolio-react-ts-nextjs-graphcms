import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { MenuItem } from '../../atoms/MenuItem/MenuItem';
import * as Styled from './styles';

export type MenuListProps = {
  isOpen?: boolean;
};

export const MenuList: FC<MenuListProps> = ({ isOpen }) => {
  const router = useRouter();
  return (
    <Styled.Container isOpen={isOpen}>
      <MenuItem text='Home' link='/' />
      <MenuItem text='Projects' link='/projects' />
      <MenuItem text='Designs' link='/designs' />
      <MenuItem text='FAQ' link='/faq' />
    </Styled.Container>
  );
};
