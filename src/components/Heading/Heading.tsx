import { ElementType, ReactNode } from 'react';
import * as Styled from './Heading.styles';

export interface IHeading {
  level: LevelProps;
  children?: ReactNode;
  isThin?: boolean;
  isUpperCase?: boolean;
  isLarge?:boolean
};

type LevelProps = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const Heading = ({ level = 'h2', children, isThin, isUpperCase,isLarge }:IHeading) => {
  const Heading = level as ElementType;
  return (
    <Styled.Text as={Heading} isThin={isThin} isLarge={isLarge} isUpperCase={isUpperCase}>
      {children}
    </Styled.Text>
  );
};
