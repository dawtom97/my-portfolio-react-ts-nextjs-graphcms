import { RefObject, useContext, useRef, useState } from 'react';
import TypeAnimation from 'react-type-animation';
import { clickSound as sound } from '../../constants/sounds';
import { SoundContext } from '../../context/SoundContext';
import { Heading } from '../Heading/Heading';
import * as Styled from './AboutSection.styles';

interface IAbout {
  aboutInfo: {
    title: string;
    content: boolean;
  }[];
  contactInfo: {
    email: string;
    residence: string;
    freelance: string;
  };
  innerRef:RefObject<HTMLDivElement>
}

export const About = ({ aboutInfo, contactInfo,innerRef }: IAbout) => {
  const [activeInfo, setActiveInfo] = useState(0);
  const [info, setInfo] = useState(aboutInfo);
  const [animationPlay, setAnimationPlay] = useState(false);
  const {soundClickSuccess} = useContext(SoundContext)


  const handleClick = (index: number) => {
    soundClickSuccess();
    setAnimationPlay((prev) => !prev);
    setActiveInfo(index);
    setTimeout(() => {
      setAnimationPlay((prev) => !prev);
    }, 1500);
  };
  return (
    <Styled.Wrapper ref={innerRef}>
      <Styled.TitleWrapper>
        <Heading level='h2'>About Me</Heading>
        <div>
          {info.map((item, index) => (
            <Styled.CircleButton
              disabled={animationPlay ? true : false}
              isActive={activeInfo === index ? true : false}
              key={index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </Styled.TitleWrapper>
      <Styled.InfoWrapper>
        <TypeAnimation
          cursor={true}
          sequence={[info[activeInfo].title, 1500, info[activeInfo].title]}
          wrapper='h3'
        />
        <p>{info[activeInfo].content}</p>
      </Styled.InfoWrapper>
      <Styled.ContactWrapper>
        <ul>
          <div>
            <li>
              <strong>RESIDENCE:</strong>
              <span>{contactInfo.residence}</span>
            </li>
            <li>
              <strong>EMAIL:</strong>
              <span>{contactInfo.email}</span>
            </li>
          </div>
          <div>
            <li>
              <strong>FREELANCE:</strong>
              <span>{contactInfo.freelance}</span>
            </li>
          </div>
        </ul>
      </Styled.ContactWrapper>
    </Styled.Wrapper>
  );
};
