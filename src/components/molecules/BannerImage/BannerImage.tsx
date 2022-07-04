import { StaticImageData } from 'next/image';
import React, { FC } from 'react';
import { SingleImage } from '../../atoms/SingleImage/SingleImage';
import * as Styled from './styles';

type BannerImageProps = {
  src: StaticImageData;
};

export const BannerImage: FC<BannerImageProps> = ({ src }) => (
  <Styled.Container>
    <SingleImage alt='ja' src={src} />
  </Styled.Container>
);
