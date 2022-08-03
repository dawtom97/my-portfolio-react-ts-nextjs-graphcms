import type { InferGetStaticPropsType } from 'next';
import { gql } from 'graphql-request';
import React from 'react';
import { ProjectsTemplate } from '../src/templates/ProjectsTemplate/ProjectsTemplate';
import { cmsConnect } from '../src/utils/cmsConnect';
import { ReferenceSection } from '../src/components/ReferenceSection/ReferenceSection';
import { ReferenceTemplate } from '../src/templates/ReferenceTemplate/ReferenceTemplate';

export const getStaticProps = async () => {
  const query = gql`
    query ReferenceQuery {
      references {
        preview {
          id
          url
        }
      }
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
    }
  `;

  const { references, contactInfo } = await cmsConnect(query);

  return {
    props: {
      references,
      contactInfo,
    },
  };
};

const reference = ({ references, contactInfo }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ReferenceTemplate links={contactInfo[0]}>
      <ReferenceSection reference={references} />
    </ReferenceTemplate>
  );
};

export default reference;
