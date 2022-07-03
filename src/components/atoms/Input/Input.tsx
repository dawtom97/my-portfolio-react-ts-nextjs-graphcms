import  { ChangeEvent, forwardRef } from 'react';
import * as Styled from './styles';

export type InputProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  isLabelled?: boolean;
  label?: string;
  inputType?:'primary' | 'secondary'

};

export const Input = forwardRef<HTMLInputElement,InputProps>(({onChange, placeholder, name, isLabelled, label = 'Label text',inputType='primary'},ref) => {
  if (isLabelled) {
    return (
      <Styled.LabelledInput ref={ref}>
        <Styled.Label>{label}</Styled.Label>
        <Styled.Input onChange={onChange} inputType={inputType} name={name} placeholder={placeholder} />
      </Styled.LabelledInput>
    );
  }
  return <Styled.Input onChange={onChange} inputType={inputType} ref={ref} name={name} placeholder={placeholder} />;
});

Input.displayName = 'Input';
