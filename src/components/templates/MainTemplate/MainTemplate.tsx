import React, { FC, ReactNode, useState } from 'react';
import { Navbar } from '../../organisms/Navbar/Navbar';
import * as Styled from './styles'

export type MainTemplateProps = {
  children?:ReactNode
}


export const MainTemplate:FC<MainTemplateProps> = ({children}) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <Styled.Container>
       <Navbar isOpen={isOpen} setOpen={setOpen}/>
       {children}
    </Styled.Container>
  );
};
