import React, { ReactNode } from 'react';
import * as Styled from './MainTemplate.styles';
import { BannerImage } from '../../components/BannerImage/BannerImage';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';

interface IMainTemplate {
  children: ReactNode;
  links: {
    facebookLink: string;
    githubLink: string;
    linkedinLink: string;
    instagramLink:string
  };
}


const MainTemplate = ({ children,links }: IMainTemplate) => {

  return (
    <div>
      <Navbar />
      <BannerImage />
      <Styled.InnerWrapper>
        {children}
        <Footer links={links}/>
      </Styled.InnerWrapper>
    </div>
  );
};

export default MainTemplate;
