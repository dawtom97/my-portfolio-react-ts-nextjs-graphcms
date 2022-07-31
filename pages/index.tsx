import type { InferGetStaticPropsType } from 'next';
import { gql } from 'graphql-request';
import { cmsConnect } from '../src/utils/cmsConnect';
import { About } from '../src/components/AboutSection/AboutSection';
import MainTemplate from '../src/templates/MainTemplate/MainTemplate';
import { BannerSection } from '../src/components/BannerSection/BannerSection';
import { RefObject, useRef } from 'react';
import { ContactSection } from '../src/components/ContactSection/ContactSection';

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
    }
  `;

  const { aboutInfo, contactInfo } = await cmsConnect(query);

  return {
    props: {
      aboutInfo,
      contactInfo,
    },
  };
};

const Home = ({ aboutInfo, contactInfo }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const aboutRef: RefObject<HTMLDivElement> = useRef(null);
  const contactRef: RefObject<HTMLDivElement> = useRef(null);

  const handleSmoothScroll = (ref: RefObject<HTMLDivElement>) => {
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
          <ContactSection innerRef={contactRef} />
        </div>
      </MainTemplate>
    </div>
  );
};

export default Home;
