import React, { FC } from 'react';
import { Button } from '../../atoms/Button/Button';
import { Heading } from '../../atoms/Heading/Heading';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import * as Styled from './styles';

export type BannerTextProps = {
  badge?: string;
  title?: string;
  titleSpan?: string;
  desc?: string;
  buttonText?: string;
  isMultipleButtons?: boolean;
  isHeading?: boolean;
  secondButtonText?: string;
  firstButtonClick?: () => void;
  secondButtonClick?: () => void;
};

export const BannerText: FC<BannerTextProps> = ({
  badge,
  title,
  titleSpan,
  desc,
  buttonText,
  isMultipleButtons,
  isHeading,
  secondButtonText,
  firstButtonClick,
  secondButtonClick,
}) => {
  return (
    <Styled.Container isHeading={isHeading}>
      {badge ? <Paragraph isBold>{badge}</Paragraph> : null}
      <Heading level={isHeading ? 'h1' : 'h2'}>
        {title} {titleSpan ? <span>{titleSpan}</span> : null}
      </Heading>
      <Paragraph>{desc}</Paragraph>
      {isMultipleButtons ? (
        <Styled.ButtonsBox isHeading={isHeading}>
          <Button ariaLabel={`${buttonText} button`} onClick={firstButtonClick}>{buttonText}</Button>
          <Button ariaLabel={`${secondButtonText} button`} onClick={secondButtonClick} color='secondary'>
            {secondButtonText}
          </Button>
        </Styled.ButtonsBox>
      ) : (
        <Styled.ButtonsBox isHeading={isHeading}>
          <Button ariaLabel={`${buttonText} button`} onClick={firstButtonClick}>{buttonText}</Button>
        </Styled.ButtonsBox>
      )}
    </Styled.Container>
  );
};
