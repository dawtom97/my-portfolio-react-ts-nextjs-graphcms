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
  const { pathname, asPath } = useRouter();
  const { soundClickSuccess } = useContext(SoundContext);

  const handleLinkClick = () => {
    setOpen(false);
    soundClickSuccess();
  }

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
          <li onClick={handleLinkClick}>
            <Link href='/' passHref>
              <Styled.CustomLink isActive={asPath === '/' ? true : false}>HOME</Styled.CustomLink>
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link href='/projects' passHref>
              <Styled.CustomLink
                isActive={asPath === '/projects' ? true : false}
                href='/projects'
              >
                PROJECTS
              </Styled.CustomLink>
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link href='/reference' passHref>
              <Styled.CustomLink
                isActive={asPath === '/reference' ? true : false}
                href='/reference'
              >
                REFERENCE
              </Styled.CustomLink>
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link href={pathname === '/' ? '#contact' : '/'} passHref>
              <Styled.CustomLink  isActive={asPath === '/#contact' ? true : false}>CONTACT</Styled.CustomLink>
            </Link>
          </li>
          <Button onClick={handleLinkClick}>
             <a target="_blank" rel="noopener noreferrer" href="../../assets/cv.pdf" download>  DOWNLOAD CV <FaDownload /></a>      
          </Button>
        </ul>
      </Styled.Nav>
    </Styled.Wrapper>
  );
};
