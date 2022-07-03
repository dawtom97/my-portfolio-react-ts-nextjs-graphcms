import React, { FC, ReactNode } from 'react';
import * as Styled from './styles';


export type ParagraphProps = {
    children?: ReactNode;
    isBold?: boolean,
    isCustomSize?: number
}

export const Paragraph:FC<ParagraphProps> = ({children,isBold,isCustomSize}) => {
  return (
    <Styled.Paragraph isCustomSize={isCustomSize} isBold={isBold}>{children}</Styled.Paragraph>
  )
}
