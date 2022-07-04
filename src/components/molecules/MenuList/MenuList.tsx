import React from 'react';
import { MenuItem } from '../../atoms/MenuItem/MenuItem';
import * as Styled from './styles';

export const MenuList = () => (
  <Styled.Container>
    <MenuItem text='Home' link='./' />
    <MenuItem text='Projects' link='./projects' />
    <MenuItem text='Designs' link='./designs' />
    <MenuItem text='FAQ' link='./faq' />
  </Styled.Container>
);
