import React, { FC, ReactNode } from 'react';
import { Heading } from '../../atoms/Heading/Heading';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import * as Styled from './styles';

type TechnologyCardProps = {
    title:string,
    desc:string,
    children:ReactNode
}

export const TechnologyCard:FC<TechnologyCardProps> = ({title,children,desc}) => {
  return (
    <Styled.Container>
        {children}
        <Heading level='h3'>{title}</Heading>
        <Paragraph>{desc}</Paragraph>

    </Styled.Container>
  )
}
