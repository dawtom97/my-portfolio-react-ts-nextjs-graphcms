import type { InferGetStaticPropsType } from 'next';
import { gql } from 'graphql-request';
import { cmsConnect } from '../src/utils/cmsConnect';
import { MainTemplate } from '../src/components/templates/MainTemplate/MainTemplate';
import { BannerText } from '../src/components/molecules/BannerText/BannerText';
import { Banner } from '../src/components/organisms/Banner/Banner';
import { About } from '../src/components/organisms/About/About';

export const getStaticProps = async () => {
  const query = gql`
    query AllPlaces {
      places {
        id
        slug
        title
        location
        description
        image {
          url
        }
      }
    }
  `;

  const { places } = await cmsConnect(query);

  return {
    props: {
      places,
    },
  };
};

const Home = ({ places }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(places);
  return (
    <div className='app'>
      <MainTemplate>
        <Banner/>
        <About/>
      </MainTemplate>
    </div>
  );
};

export default Home;
