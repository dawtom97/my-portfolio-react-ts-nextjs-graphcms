import type { InferGetStaticPropsType } from 'next';
import { gql } from 'graphql-request';
import { cmsConnect } from '../src/utils/cmsConnect';
import { HomeTemplate } from '../src/components/templates/HomeTemplate/HomeTemplate';

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
    <HomeTemplate places={places}>
      <h1>aa</h1>
    </HomeTemplate>
    </div>
  );
};

export default Home;
