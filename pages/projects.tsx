import type { InferGetStaticPropsType } from 'next';
import { gql } from 'graphql-request';
import React from 'react';
import { ProjectsTemplate } from '../src/templates/ProjectsTemplate/ProjectsTemplate';
import { cmsConnect } from '../src/utils/cmsConnect';
import ProjectSection from '../src/components/ProjectSection/ProjectSection';
import { Heading } from '../src/components/Heading/Heading';

export const getStaticProps = async () => {
  const query = gql`
    query ProjectsQuery {
      projectsInfo {
        image {
          url
        }
        title
        stack
        code
        demo
        desc
      }
    }
  `;

  const { contactInfo,projectsInfo } = await cmsConnect(query);

  return {
    props: {
      projectsInfo
    },
  };
};

const projects = ({ projectsInfo }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ProjectsTemplate>
      <Heading level='h1'>My projects</Heading>
      <Heading level='h3'>In the following cases, I also created design</Heading>
      <ProjectSection projects={projectsInfo}/>
    </ProjectsTemplate>
  );
};

export default projects;
