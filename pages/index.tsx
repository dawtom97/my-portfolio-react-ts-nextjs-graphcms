import type { NextPage } from "next";
import { gql, GraphQLClient } from "graphql-request";
import { cmsConnect } from "../src/utils/cmsConnect";
import { randomVideo } from "../src/utils/randomVideo";
import Image from "next/image";
import { imageLoader } from "../src/utils/imageLoader";

export const getStaticProps = async () => {
  const query = gql`
    query Videos {
      videos {
        createdAt
        id
        title
        description
        seen
        slug
        tag
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;

  const { videos } = await cmsConnect(query);
  console.log(videos);

  return {
    props: {
      videos,
    },
  };
};

const Home: NextPage = ({ videos }: any) => {
  console.log(videos[randomVideo(videos.length)].thumbnail.url);
  return (
    <div className="app">
      <div className="main-video">
        <Image
          loader={imageLoader}
          width="100%"
          height="100%"
          alt={videos[randomVideo(videos.length)].title}
          src={videos[randomVideo(videos.length)].thumbnail.url}
        />
      </div>
    </div>
  );
};

export default Home;
