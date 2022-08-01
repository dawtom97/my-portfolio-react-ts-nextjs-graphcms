import React from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import * as Styled from './Modal.styles';

const dropIn = {

  hidden: {
    y: '120%',
    opacity: 0,
  },
  visible: {
    y: '-80px',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

export interface IModal {
  msg?: string | string[];
  isError?:boolean
}

export const Modal = ({ msg,isError }: IModal) => {
  const element = document.getElementById('modal') as HTMLElement;
  console.log(typeof msg)
  return createPortal(
    <Styled.Modal>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className='modal orange-gradient'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className='modal'>
          <p className={isError ? 'errorText':'successText'}>{msg}</p>
        </div>
      </motion.div>
    </Styled.Modal>,
    element,
  );
};
