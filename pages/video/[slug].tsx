import { gql } from "graphql-request";
import { GetServerSideProps } from "next";
import React from "react";
import { cmsConnect } from "../../src/utils/cmsConnect";

export const getServerSideProps: GetServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const query = gql`
    query ($pageSlug: String!) {
      video(where: { slug: $pageSlug }) {
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
  const variables = {
    pageSlug,
  };

  const { video } = await cmsConnect(query, variables);

  return {
    props: {
      video,
    },
  };
};

type VideoProps = {
  createdAt: string;
  description: string;
  id: string;
  mp4: null;
  seen: null;
  slug: string;
  tag: string[];
  thumbnail: null;
  title: string;
};

const VideoPage = (video: VideoProps) => {
  console.log(video);
  return <div>VideoPage</div>;
};

export default VideoPage;
