import TypeAnimation from 'react-type-animation';
import * as Styled from './BannerSection.styles';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { BiDownArrow, BiRightArrow } from 'react-icons/bi';


interface IBanner {
  contactScroll: () => void;
  aboutScroll: () => void;
}

export const BannerSection = ({ aboutScroll, contactScroll }: IBanner) => {
  return (
    <Styled.Wrapper>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Heading level='h1' isLarge>Hello there <br /> I'm Dawid</Heading>
      <TypeAnimation
        cursor={true}
        sequence={['Front-End Developer', 1500, 'Front-end Developer']}
        wrapper='h3'
      />
      <p>
        Hello! I am an Front-End and Web Developer based in Katowice Poland. I usually work in Javascript related technologies. In addition, I often teach others and design the appearance of the application as a hobby
      </p>

      <Styled.ButtonsWrapper>
        <Button onClick={contactScroll}>
          CONTACT ME <BiRightArrow />
        </Button>
        <Button onClick={aboutScroll}>
          <BiDownArrow />
        </Button>
      </Styled.ButtonsWrapper>
    </Styled.Wrapper>
  );
};
