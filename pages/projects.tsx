import type { InferGetStaticPropsType } from 'next';
import { gql } from 'graphql-request';
import React from 'react';
import { ProjectsTemplate } from '../src/templates/ProjectsTemplate/ProjectsTemplate';
import { cmsConnect } from '../src/utils/cmsConnect';
import ProjectSection from '../src/components/ProjectSection/ProjectSection';

export const getStaticProps = async () => {
  const query = gql`
    query ProjectsQuery {
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
      contactInfo,
      projectsInfo
    },
  };
};

const projects = ({ contactInfo,projectsInfo }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ProjectsTemplate links={contactInfo}>
      <ProjectSection projects={projectsInfo}/>
    </ProjectsTemplate>
  );
};

export default projects;
