import React, { ReactNode } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import * as Styled from './ProjectsTemplate.styles';

interface IProjectsTemplate {
  children: ReactNode;
}

export const ProjectsTemplate = ({ children}:IProjectsTemplate) => {
  return (
    <Styled.Wrapper>
      <Navbar />
      <Styled.LeftBlock />
      <Styled.InnerWrapper>
        {children}
      </Styled.InnerWrapper>
    </Styled.Wrapper>
  );
};
