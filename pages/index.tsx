import type { InferGetStaticPropsType } from 'next';
import { gql } from 'graphql-request';
import { cmsConnect } from '../src/utils/cmsConnect';
import { About } from '../src/components/AboutSection/AboutSection';
import MainTemplate from '../src/templates/MainTemplate/MainTemplate';
import { BannerSection } from '../src/components/BannerSection/BannerSection';
import { RefObject, useContext, useRef, useState } from 'react';
import { ContactSection } from '../src/components/ContactSection/ContactSection';
import { SoundContext } from '../src/context/SoundContext';
import { SkillsSection } from '../src/components/SkillsSection/SkillsSection';

export const getStaticProps = async () => {
  const query = gql`
    query HomepageQuery {
      aboutInfo {
        title
        content
      }
      contactInfo {
        githubLink
        facebookLink
        email
        residence
        linkedinLink
        telephone
        freelance
      }
      skills {
        title
        details
        desc
      }
    }
  `;

  const { aboutInfo, contactInfo, skills } = await cmsConnect(query);

  return {
    props: {
      aboutInfo,
      contactInfo,
      skills
    },
  };
};

const Home = ({ aboutInfo, contactInfo,skills }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const aboutRef: RefObject<HTMLDivElement> = useRef(null);
  const contactRef: RefObject<HTMLDivElement> = useRef(null);
  const { soundClickSuccess } = useContext(SoundContext);

  const handleSmoothScroll = (ref: RefObject<HTMLDivElement>) => {
    soundClickSuccess();
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='app'>
      <MainTemplate>
        <div>
          <BannerSection
            contactScroll={() => handleSmoothScroll(contactRef)}
            aboutScroll={() => handleSmoothScroll(aboutRef)}
          />
          <About innerRef={aboutRef} aboutInfo={aboutInfo} contactInfo={contactInfo[0]} />
          <SkillsSection skillsInfo={skills} />
          <ContactSection contactInfo={contactInfo[0]} innerRef={contactRef} />
        </div>
      </MainTemplate>
    </div>
  );
};

export default Home;
