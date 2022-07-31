import React, { ReactNode } from 'react';
import * as Styled from './MainTemplate.styles';
import { BannerImage } from '../../components/BannerImage/BannerImage';
import { Navbar } from '../../components/Navbar/Navbar';

interface IMainTemplate {
  children: ReactNode;
}


const MainTemplate = ({ children }: IMainTemplate) => {
  return (
    <div>
      <Navbar />
      <BannerImage />
      <Styled.InnerWrapper>{children}</Styled.InnerWrapper>
    </div>
  );
};

export default MainTemplate;
