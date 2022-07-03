import styled, { css } from 'styled-components';
import { HeadingProps } from './Heading';


const THIN = css` font-weight: 200;`
const UPPERCASE = css`text-transform:uppercase;`

export const Text = styled.h2<HeadingProps>`
  ${({isThin}) => isThin && THIN};
  ${({isUpperCase}) => isUpperCase && UPPERCASE};
`