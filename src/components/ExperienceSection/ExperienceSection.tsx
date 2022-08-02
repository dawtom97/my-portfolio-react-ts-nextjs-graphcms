import React, { useContext } from 'react';
import * as Styled from './ExperienceSection.styles';
import { Heading } from '../Heading/Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { SoundContext } from '../../context/SoundContext';
import Link from 'next/link';




interface IExperience {
  experiences: {
    title: string;
    desc: string;
    details: string[];
    duration: string;
  }[];
}

export const ExperienceSection = ({ experiences }: IExperience) => {
  const { soundClickSuccess } = useContext(SoundContext);

  return (
    <Styled.Wrapper>
      <Heading level='h2'>Experience</Heading>
      <Heading level='h3'>MY STORY</Heading>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        onSlideChange={() => soundClickSuccess()}
        className='mySwiper'
        breakpoints={{
          1200: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={50}
      >
        {experiences.map((exp) => (
          <SwiperSlide key={exp.title}>
            <Styled.ExperienceCard>
              <Styled.CardHeading>
                <p>{exp.duration}</p>
                <Heading level='h3'>{exp.title}</Heading>
              </Styled.CardHeading>
              <p>{exp.desc}</p>
              <p>
                <strong>Details</strong>
              </p>
              <ul>
                {exp.details.map((detail) => (
                  <li key={detail}>- {detail}</li>
                ))}
              </ul>
            </Styled.ExperienceCard>
          </SwiperSlide>
        ))}
      </Swiper>
      <Styled.ButtonsWrapper onClick={soundClickSuccess}>
         <Link  href='/reference'>Reference</Link>
         <Link  href='/projects'>Projects</Link>
      </Styled.ButtonsWrapper>

    </Styled.Wrapper>
  );
};
