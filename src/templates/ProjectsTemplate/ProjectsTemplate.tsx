import React, { ReactNode } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import styled from 'styled-components';


export const Wrapper = styled.div`
  min-height: 101vh;
`;
export const InnerWrapper = styled.main`
  @media (min-width: 992px) {
    margin-left: 24%;
    margin-right: 120px;
    position: relative;
    &::before {
      position: fixed;
      content: '';
      background-color:#e0e1e2;
      height: 100vh;
      width: 6%;
      top: 0;
      right: 0;
      z-index: -1;
    }
  }
`;

export const LeftBlock = styled.div`
    display: none;
    @media (min-width:992px) {
      display: block;
      height: 100vh;
      width: 22%;
      position: fixed;
      background-color: ${({theme})=>theme.primary};
      top:0;
      left:0;
    }
`




interface IProjectsTemplate {
  children: ReactNode;
  links: {
    facebookLink: string;
    githubLink: string;
    linkedinLink: string;
    instagramLink:string
  };
}

export const ProjectsTemplate = ({ children,links }: IProjectsTemplate) => {

  return (
    <Wrapper>
      <Navbar />
      <LeftBlock/>
      <InnerWrapper>
        {children}
        <Footer links={links}/>
      </InnerWrapper>
    </Wrapper>
  );
};
