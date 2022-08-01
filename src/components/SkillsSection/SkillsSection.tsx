import React from 'react';
import * as Styled from './SkillsSection.styles';
import { Heading } from '../Heading/Heading';

interface ISkills {
  skillsInfo: {
    title:string,
    desc:string,
    details:string[]
  }[]
}

export const SkillsSection = ({skillsInfo}:ISkills) => {
  return (
    <Styled.Wrapper>
      <Heading level='h2'>Skills</Heading>
      <Heading level='h3'>DEVELOPMENT ARSENAL</Heading>
      <Styled.InnerWrapper>
          {skillsInfo.map((skill,index) => (
            <Styled.TechnologyBox key={index}>
              <div>
                 <Heading level='h3'>{skill.title}</Heading>
                 <p>{skill.desc}</p>
              </div>
       
                 <ul>
                {skill.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
                <span> {'Skill > 50 && skill < 100'}</span>
            </Styled.TechnologyBox>
          ))}
      </Styled.InnerWrapper>
    </Styled.Wrapper>
  );
};
