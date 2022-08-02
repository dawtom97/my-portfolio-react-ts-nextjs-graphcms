import React, { useContext } from 'react';
import { GrFacebookOption, GrGithub, GrLinkedinOption, GrInstagram } from 'react-icons/gr';
import * as Styled from './Footer.styles';
import { SoundContext } from '../../context/SoundContext';

interface IFooter {
  links: {
    facebookLink: string;
    githubLink: string;
    linkedinLink: string;
    instagramLink: string;
  };
}

export const Footer = ({ links }: IFooter) => {
  const { soundClickSuccess } = useContext(SoundContext);

  return (
    <Styled.Wrapper>
      <div>
        <p>@{new Date().getFullYear()} DAWID TOMCZYK. ALL RIGHTS RESERVED</p>
        <Styled.IconsBox>
          <a
            rel='noreferrer'
            target={'_blank'}
            onClick={soundClickSuccess}
            href={links.facebookLink}
          >
            <GrFacebookOption />
          </a>
          <a rel='noreferrer' target={'_blank'} onClick={soundClickSuccess} href={links.githubLink}>
            <GrGithub />
          </a>
          <a
            rel='noreferrer'
            target={'_blank'}
            onClick={soundClickSuccess}
            href={links.linkedinLink}
          >
            <GrLinkedinOption />
          </a>
          <a
            rel='noreferrer'
            target={'_blank'}
            onClick={soundClickSuccess}
            href={links.instagramLink}
          >
            <GrInstagram />
          </a>
        </Styled.IconsBox>
      </div>
    </Styled.Wrapper>
  );
};
