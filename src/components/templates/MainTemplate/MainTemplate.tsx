import React, { FC, ReactNode } from 'react';

export type MainTemplateProps = {
  children?:ReactNode
}


export const MainTemplate:FC<MainTemplateProps> = ({children}) => {
  return (
    <div>
       <h1>Menu</h1>
       {children}
    </div>
  );
};
