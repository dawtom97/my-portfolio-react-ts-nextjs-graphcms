import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const COLOR = {
  primary: css`
      color: #fff;
      background: ${({ theme }) => theme.primary};
      &::before {
      content:"";
      width:100%;
      height: 100%;
      background: ${({ theme }) => theme.primaryDark};
      position: absolute;
      top:0;
      left:0;
      opacity: 0.2;
      z-index: 0;
      border-radius: 40%;
      transform: translateY(-200px);
      transition: 0.4s;
      transition-delay: 50ms;
    }
    `,
  secondary: css`
      color:${({ theme }) => theme.primary};
      border: 2px solid ${({ theme }) => theme.primary};
      background: transparent;
      &::before {
      content:"";
      width:100%;
      height: 100%;
      background: ${({ theme }) => theme.primary};
      position: absolute;
      top:0;
      left:0;
      opacity: 0.2;
      z-index: 0;
      border-radius: 30%;
      transform: translateY(-200px);
      transition: 0.4s;
      transition-delay: 50ms;
    }
    `,
};

const SIZE = {
  small: css`
      font-size: 1.1rem;
      min-width: 80px;
      min-height: 23px;
      padding: 4px 6px;
      
    `,
  regular: css`
      min-height: 50px;
      font-size: 1.4rem;
      min-width: 220px;
    `
}

export const Container = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  font-weight: 400;
  outline: none;
  letter-spacing: 1px;
  ${({ color }) => color && COLOR[color]};
  ${({ size }) => size && SIZE[size]};

  & > span {
    position: relative;
  }

  &:focus, &:hover {
  //  box-shadow: 0px 5px 12px #e1e1e1;
    &::before {
      transform: translateY(50%);
    }

  }

`
