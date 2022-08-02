import React, { useContext, useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import * as Styled from './Navbar.styles';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';
import { Button } from '../Button/Button';
import { SoundContext } from '../../context/SoundContext';

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useRouter();
  const { soundClickSuccess } = useContext(SoundContext);

  return (
    <Styled.Wrapper>
      <Link href='/'>Dawid Tomczyk </Link>
      <Hamburger
        toggled={isOpen}
        toggle={() => {
          setOpen(prev=>!prev);
          soundClickSuccess();
        }}
      />
      <Styled.Nav isVisible={isOpen}>
        <ul>
          <li onClick={soundClickSuccess}>
            <Link href='/' passHref>
              <Styled.CustomLink isActive={pathname === '/' ? true : false}>HOME</Styled.CustomLink>
            </Link>
          </li>
          <li onClick={soundClickSuccess}>
            <Link href='/projects' passHref>
              <Styled.CustomLink
                isActive={pathname === '/projects' ? true : false}
                href='/projects'
              >
                PROJECTS
              </Styled.CustomLink>
            </Link>
          </li>
          <li onClick={soundClickSuccess}>
            <Link href='/' passHref>
              <Styled.CustomLink>ABOUT</Styled.CustomLink>
            </Link>
          </li>
          <li onClick={soundClickSuccess}>
            <Link href='/' passHref>
              <Styled.CustomLink>CONTACTS</Styled.CustomLink>
            </Link>
          </li>
          <Button onClick={soundClickSuccess}>
            DOWNLOAD CV <FaDownload />
          </Button>
        </ul>
      </Styled.Nav>
    </Styled.Wrapper>
  );
};
