import Link from 'next/link';
import { MenuList } from '../../molecules/MenuList/MenuList';
import * as Styled from './styles';
import { Dispatch, FC, SetStateAction } from 'react';

export type NavbarProps = {
  isOpen: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

export const Navbar: FC<NavbarProps> = ({ isOpen, setOpen }) => {
  return (
    <Styled.Container>
    
        <Link href='./'>dawtom97</Link>
        <MenuList isOpen={isOpen} />
     
    </Styled.Container>
  );
};
