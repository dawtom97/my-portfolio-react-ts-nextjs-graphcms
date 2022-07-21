import React from 'react';
import * as Styled from './styles';
import { MenuItem } from '../../atoms/MenuItem/MenuItem';
import { MdFacebook } from 'react-icons/md';
import { FiInstagram } from 'react-icons/fi';
import { SiLinkedin } from 'react-icons/si';
import {AiFillGithub} from 'react-icons/ai'
import Link from 'next/link';

export const Aside = () => {
  return (
    <Styled.Container>

          <Link href='/projects'>Projects</Link>
          <Link href='/designs'>Designs</Link>
          
          <MdFacebook />
     
     
          <FiInstagram />
     
    
          <SiLinkedin />

          <AiFillGithub/>
  
        <span></span>
    </Styled.Container>
  )
}
