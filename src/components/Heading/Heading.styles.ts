import styled, { css } from 'styled-components';
import { IHeading    } from './Heading';


const THIN = css` font-weight: 200;`
const UPPERCASE = css`text-transform:uppercase;`
const LARGE = css`font-size:5.5rem;`

export const Text = styled.h2<IHeading>`
  ${({isThin}) => isThin && THIN};
  ${({isUpperCase}) => isUpperCase && UPPERCASE};
  color: #262728;
  font-size: 5rem;
  ${({isLarge}) => isLarge && LARGE}
  @media (min-width:992px) {
    font-size:${({isLarge}) => isLarge ? '4.2vw' : '3.3vw'}
  }
`