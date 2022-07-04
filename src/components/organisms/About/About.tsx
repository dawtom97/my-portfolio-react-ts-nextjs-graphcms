import React from 'react';
import { BannerText } from '../../molecules/BannerText/BannerText';
import * as Styled from './styles';

export const About = () => {
  return (
    <div>
      <BannerText
        firstButtonClick={() => console.log(1)}
        title='I’m'
        titleSpan='Dawid Tomczyk'
        desc='I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less interesting.'
        buttonText='Download CV'
        isMultipleButtons
        secondButtonText='View Portfolio'
      />
    </div>
  );
};
