import React from 'react';
import { Button } from '../../atoms/Button/Button';


export const HomeTemplate = () => {
  return (
    <div>
        <Button color='primary'>Kup teraz</Button>
        <Button color='secondary'>Download CV</Button>
        <Button size='small' color='primary'>Kup teraz</Button>
        <Button size='small' color='secondary'>Download CV</Button>
    </div>
  );
};
