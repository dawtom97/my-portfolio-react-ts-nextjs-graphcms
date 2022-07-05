import React from 'react';
import { BannerText } from '../../molecules/BannerText/BannerText';
import { StatsBox } from '../../molecules/StatsBox/StatsBox';
import * as Styled from './styles';

export const About = () => {
  return (
    <Styled.Container>
      <Styled.InnerWrapper>
        <StatsBox/>
        <BannerText
          firstButtonClick={() => console.log(1)}
          title='I am a Web Developer & UI Designer'
          desc='I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less interesting. I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less interesting. I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less interesting.'
          buttonText='Download CV'
          isMultipleButtons
          secondButtonText='View Portfolio'
        />
      </Styled.InnerWrapper>
    </Styled.Container>
  );
};
