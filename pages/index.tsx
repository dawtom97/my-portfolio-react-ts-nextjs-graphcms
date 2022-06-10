import type { InferGetStaticPropsType } from 'next';
import { gql } from 'graphql-request';
import { cmsConnect } from '../src/utils/cmsConnect';
import { AllPlacesProps } from '../src/types/AllPlaces.types';
import styled from 'styled-components';
import Image from 'next/image';
import { imageLoader } from '../src/utils/imageLoader';

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
  console.log(places);

  return {
    props: {
      places,
    },
  };
};

const PreviewCard = styled.article`
   height: 250px;
   width: 200px;

   img {
    object-fit: cover;
   }
`;

const Home = ({ places }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(places[0].title);
  return (
    <div className='app'>
      {places.map((place: AllPlacesProps) => (
        <PreviewCard key={place.id}>
          <Image loader={imageLoader} src={place.image.url} width={250} height={320} />
        </PreviewCard>
      ))}
    </div>
  );
};

export default Home;
