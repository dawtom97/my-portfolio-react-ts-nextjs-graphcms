import React, { ReactNode } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import * as Styled from './ProjectsTemplate.styles';

interface IProjectsTemplate {
  children: ReactNode;
  links: {
    facebookLink: string;
    githubLink: string;
    linkedinLink: string;
    instagramLink: string;
  };
}

export const ProjectsTemplate = ({ children, links }: IProjectsTemplate) => {
  return (
    <Styled.Wrapper>
      <Navbar />
      <Styled.LeftBlock />
      <Styled.InnerWrapper>
        {children}
        <Footer links={links} />
      </Styled.InnerWrapper>
    </Styled.Wrapper>
  );
};
