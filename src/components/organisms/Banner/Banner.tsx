import React from 'react';
import { BannerText } from '../../molecules/BannerText/BannerText';
import * as Styled from './styles';

import image from '../../../assets/elanBanner1.jpg'
import { BannerImage } from '../../molecules/BannerImage/BannerImage';

export const Banner = () => {
  return (
    <Styled.Container>
      <Styled.InnerWrapper>
        <BannerImage src={image}/>
        <BannerText
          firstButtonClick={() => console.log(1)}
          isHeading
          badge='Hello,'
          title='I’m'
          titleSpan='Dawid Tomczyk'
          desc='I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less interesting.'
          buttonText='Download CV'
        />
      </Styled.InnerWrapper>
    </Styled.Container>
  );
};
