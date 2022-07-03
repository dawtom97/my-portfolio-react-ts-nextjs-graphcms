import styled, { css } from 'styled-components';
import { InputProps } from './Input';


const TYPE = {
  primary: css`
    border: 1px solid #e1e1e1;
    border-radius: 30px;
  `,
  secondary: css`
    border: 0px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
  `,
};

export const Input = styled.input<InputProps>`
  cursor: pointer;
  outline: none;
  padding: 0 10px;
  height: 35px;
  ${({inputType}) => inputType && TYPE[inputType]};
  &:focus {
    box-shadow: 0px 5px 12px #e1e1e1;
  }
`

export const LabelledInput = styled.div`
  & > label,input {
    display: block;
  }
`

export const Label = styled.label`
   font-size: 1.3rem;
`