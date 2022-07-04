import type { InferGetStaticPropsType } from 'next';
import { gql } from 'graphql-request';
import { cmsConnect } from '../src/utils/cmsConnect';
import { MainTemplate } from '../src/components/templates/MainTemplate/MainTemplate';
import { BannerText } from '../src/components/molecules/BannerText/BannerText';

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
        <BannerText
          secondButtonClick={() => console.log(3)}
          firstButtonClick={() => console.log(1)}
          isHeading
          badge='Hello,'
          title='I’m'
          titleSpan='Dawid Tomczyk'
          desc='I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less interesting.'
          buttonText='Download CV'
          isMultipleButtons
          secondButtonText='View Portfolio'
        />
      </MainTemplate>
    </div>
  );
};

export default Home;
