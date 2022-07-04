import React, { FC, ReactNode, useState } from 'react';
import { Navbar } from '../../organisms/Navbar/Navbar';

export type MainTemplateProps = {
  children?:ReactNode
}


export const MainTemplate:FC<MainTemplateProps> = ({children}) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
       <Navbar isOpen={isOpen} setOpen={setOpen}/>
       {children}
    </div>
  );
};
