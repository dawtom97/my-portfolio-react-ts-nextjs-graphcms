import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

type SingleImageProps = {
  src:StaticImageData,
  alt?:string,
}

export const SingleImage:FC<SingleImageProps> = ({src, alt}) => (
    <Image src={src} alt={alt} layout='fill' objectFit='cover'/>
  )


