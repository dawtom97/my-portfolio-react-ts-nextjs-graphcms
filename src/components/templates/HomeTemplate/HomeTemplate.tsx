import React from 'react';
import { HomeTemplateProps } from './HomeTemplate.types';
import * as Styled from './styles';
import banner1 from '../../../assets/elanBanner1.jpg';

export const HomeTemplate = ({ children }: HomeTemplateProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Banner image={banner1}></Styled.Banner>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Wrapper>
  );
};
