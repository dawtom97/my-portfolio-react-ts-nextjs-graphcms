import React, { useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import * as Styled from './Navbar.styles';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {FaDownload} from 'react-icons/fa'
import { Button } from '../Button/Button';


export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useRouter();
  console.log(pathname === '/projects');

  return (
    <Styled.Wrapper>
      <Link href='/'>Dawid Tomczyk </Link>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <Styled.Nav isVisible={isOpen}>
        <ul>
          <li>
            <Link href='/' passHref>
              <Styled.CustomLink isActive={pathname === '/' ? true : false}>HOME</Styled.CustomLink>
            </Link>
          </li>
          <li>
            <Link href='/projects' passHref>
              <Styled.CustomLink isActive={pathname === '/projects' ? true : false} href='/projects'>
                PROJECTS
              </Styled.CustomLink>
            </Link>
          </li>
          <li>
            <Link href='/' passHref>
              <Styled.CustomLink>ABOUT</Styled.CustomLink>
            </Link>
          </li>
          <li>
            <Link href='/' passHref>
              <Styled.CustomLink>CONTACTS</Styled.CustomLink>
            </Link>
          </li>
          <Button>DOWNLOAD CV <FaDownload/></Button>
        </ul>
      </Styled.Nav>
    </Styled.Wrapper>
  );
};
