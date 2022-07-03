import styled, { css } from 'styled-components';
import { ParagraphProps } from './Paragraph';


const BOLD = css`font-weight:700;`

export const Paragraph = styled.p<ParagraphProps>`
  ${({isBold}) => isBold && BOLD}
  font-size: ${({isCustomSize}) => isCustomSize ? `${isCustomSize}rem` : '1.6rem'};
`