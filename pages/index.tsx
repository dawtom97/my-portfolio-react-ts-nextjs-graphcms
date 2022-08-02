import type { InferGetStaticPropsType } from 'next';
import { gql } from 'graphql-request';
import { cmsConnect } from '../src/utils/cmsConnect';
import { AboutSection } from '../src/components/AboutSection/AboutSection';
import MainTemplate from '../src/templates/MainTemplate/MainTemplate';
import { BannerSection } from '../src/components/BannerSection/BannerSection';
import { RefObject, useContext, useRef, useState } from 'react';
import { ContactSection } from '../src/components/ContactSection/ContactSection';
import { SoundContext } from '../src/context/SoundContext';
import { SkillsSection } from '../src/components/SkillsSection/SkillsSection';
import { ExperienceSection } from '../src/components/ExperienceSection/ExperienceSection';

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
        instagramLink
      }
      skills {
        title
        details
        desc
      }
      experiences {
        title
        desc
        details
        duration
      }
    }
  `;

  const { aboutInfo, contactInfo, skills,experiences } = await cmsConnect(query);

  return {
    props: {
      aboutInfo,
      contactInfo,
      skills,
      experiences
    },
  };
};

const Home = ({
  aboutInfo,
  contactInfo,
  skills,
  experiences
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const aboutRef: RefObject<HTMLDivElement> = useRef(null);
  const contactRef: RefObject<HTMLDivElement> = useRef(null);
  const { soundClickSuccess } = useContext(SoundContext);

  const handleSmoothScroll = (ref: RefObject<HTMLDivElement>) => {
    soundClickSuccess();
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='app'>
      <MainTemplate links={contactInfo[0]}>
        <div>
          <BannerSection
            contactScroll={() => handleSmoothScroll(contactRef)}
            aboutScroll={() => handleSmoothScroll(aboutRef)}
          />
          <AboutSection innerRef={aboutRef} aboutInfo={aboutInfo} contactInfo={contactInfo[0]} />
          <ExperienceSection experiences={experiences} />
          <SkillsSection skillsInfo={skills} />
          <ContactSection contactInfo={contactInfo[0]} innerRef={contactRef} />
        </div>
      </MainTemplate>
    </div>
  );
};

export default Home;
