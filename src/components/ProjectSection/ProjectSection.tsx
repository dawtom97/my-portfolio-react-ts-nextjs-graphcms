import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 400vh;

  position: relative;
  overflow: hidden;
`;
export const InnerWrapper = styled.div`
  position: fixed;
  top: 25%;
  left: calc(10rem + 15vw);
  min-height: 50vh;
  display: flex;
  gap: 70px;

`;

interface ICardProps {
    image: {
        url:string
    }
}
export const ProjectCard = styled.article`
    background-color: #fff;
    width: 600px;
    box-shadow: 0 0 30px rgb(0 0 0 / 8%);
`

export const Preview = styled.div<ICardProps>`
      background:${props => `url(${props.image.url}) no-repeat top center`};
    background-size: cover;
    height: 300px;
`
export const PreviewText = styled.div`
    padding: 15px;
    font-size: 1.5rem;
    & ul {
        margin-top: 20px;
        list-style: none;
        display: flex;
        gap: 8px;
        color:${({theme})=>theme.primary};
        font-weight:700;
        font-size: 1.3rem;
    }
`


interface IProjects {
  projects: {
    image: {
      url: string;
    };
    title: string;
    stack: string[];
    code: string;
    demo: string;
    desc: string;
  }[];
}

const ProjectSection = ({ projects }: IProjects) => {
  const ref = useRef(null);

  useEffect(() => {
    const element: any = ref.current;
    const rotate = () => (element.style.transform = `translateX(${-window.pageYOffset}px)`);
    window.addEventListener('scroll', rotate);
    return () => window.removeEventListener('scroll', rotate);
  }, []);

  return (
    <Wrapper>
      <InnerWrapper ref={ref}>
        {projects.map((project) => (
          <ProjectCard key={project.title}>
               <Preview image={project.image}>
               </Preview>
               <PreviewText>
                   <h3>{project.title}</h3>
                   <p>{project.desc}</p>
                   <ul>
                   {project.stack.map((item) => <li key={item}>#{item}</li>)}
                   </ul>
               </PreviewText>
          </ProjectCard>
        ))}
      </InnerWrapper>
    </Wrapper>
  );
};

export default ProjectSection;
