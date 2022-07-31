import { useRef, useState } from 'react';
import TypeAnimation from 'react-type-animation';
import { clickSound as sound } from '../../constants/sounds';
import * as Styled from './AboutSection.styles';

interface IAbout {
  aboutInfo: {
    title: string;
    content: boolean;
  }[];
  contactInfo: {
    email:string,
    residence:string,
    freelance:string
  }
}

export const About = ({ aboutInfo, contactInfo }: IAbout) => {
  console.log(contactInfo)
  const [activeInfo, setActiveInfo] = useState(0);
  const [info, setInfo] = useState(aboutInfo);
  const [animationPlay, setAnimationPlay] = useState(false);

  const clickSound = useRef<HTMLAudioElement | undefined | any>(
    typeof Audio !== 'undefined' ? new Audio(sound) : undefined,
  );

  const handleClick = (index: number) => {
    clickSound.current.play();
    setAnimationPlay((prev) => !prev);
    setActiveInfo(index);
    setTimeout(() => {
      setAnimationPlay((prev) => !prev);
    }, 1500);
  };
  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Styled.Heading>About Me</Styled.Heading>
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
