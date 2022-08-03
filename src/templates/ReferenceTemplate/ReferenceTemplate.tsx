import React, { ReactNode } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import * as Styled from './ReferenceTemplate.styles';

interface IReferenceTemplate {
  children: ReactNode;
  links: {
    facebookLink: string;
    githubLink: string;
    linkedinLink: string;
    instagramLink: string;
  };
}

export const ReferenceTemplate = ({ children, links }: IReferenceTemplate) => {
  return (
    <div>
      <Navbar />
      <Styled.LeftBlock />
      <Styled.InnerWrapper>
        {children}
        <Footer links={links} />
      </Styled.InnerWrapper>
    </div>
  );
};
