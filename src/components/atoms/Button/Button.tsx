import { forwardRef, MouseEvent, ReactNode } from 'react';
import * as Styled from './styles';

export type ButtonProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  color?: 'primary' | 'secondary';
  size?: 'small' | 'regular';
  disabled?: boolean;
  ariaLabel?: string;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = 'regular', ariaLabel, onClick, disabled, color = 'primary', children }, ref) => {
    return (
      <Styled.Container
        size={size}
        aria-label={ariaLabel}
        onClick={onClick}
        disabled={disabled}
        color={color}
        ref={ref}
      >
        <span>{children}</span>
      </Styled.Container>
    );
  },
);

Button.displayName = 'Button';
