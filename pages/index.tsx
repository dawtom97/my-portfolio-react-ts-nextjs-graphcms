import type { InferGetStaticPropsType } from 'next';
import { gql } from 'graphql-request';
import { cmsConnect } from '../src/utils/cmsConnect';
import { About } from '../src/components/AboutSection/AboutSection';
import MainTemplate from '../src/templates/MainTemplate/MainTemplate';

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
  return (
    <div className='app'>
      <MainTemplate>
        <div>
          <About aboutInfo={aboutInfo} contactInfo={contactInfo[0]} />
        </div>
      </MainTemplate>
    </div>
  );
};

export default Home;
