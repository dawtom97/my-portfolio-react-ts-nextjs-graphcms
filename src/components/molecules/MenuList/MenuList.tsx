import React, { FC } from 'react';
import { MenuItem } from '../../atoms/MenuItem/MenuItem';
import * as Styled from './styles';
import { MdFacebook } from 'react-icons/md';
import { FiInstagram } from 'react-icons/fi';
import { SiLinkedin } from 'react-icons/si';
import { Button } from '../../atoms/Button/Button';

export type MenuListProps = {
  isOpen?: boolean;
};

export const MenuList: FC<MenuListProps> = ({ isOpen }) => {
  return (
    <Styled.Container isOpen={isOpen}>
      <div>
        <MenuItem link=''>
          <MdFacebook />
        </MenuItem>
        <MenuItem link=''>
          <FiInstagram />
        </MenuItem>
        <MenuItem link=''>
          <SiLinkedin />
        </MenuItem>
      </div>

      <div>
        <Button color='secondary' size='small'>
          <MenuItem link=''>Faq</MenuItem>
        </Button>
      </div>
    </Styled.Container>
  );
};
