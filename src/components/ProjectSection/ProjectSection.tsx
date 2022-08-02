import React, { RefObject, useContext, useEffect, useRef } from 'react';
import { GrGithub } from 'react-icons/gr';
import { SoundContext } from '../../context/SoundContext';
import * as Styled from './ProjectSection.styles';
import {BiUpArrow} from 'react-icons/bi'

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
  const ref: RefObject<HTMLDivElement> | any = useRef(null);
  const { soundClickSuccess } = useContext(SoundContext);

  useEffect(() => {
    const element = ref.current;
    const rotate = () => (element.style.transform = `translateX(${-window.pageYOffset}px)`);
    window.addEventListener('scroll', rotate);
    return () => window.removeEventListener('scroll', rotate);
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.InnerWrapper ref={ref}>
        {projects.map((project) => (
          <Styled.ProjectCard key={project.title}>
            <Styled.Preview className='image' image={project.image}></Styled.Preview>
            <Styled.PreviewText>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <ul>
                {project.stack.map((item) => (
                  <li key={item}>#{item}</li>
                ))}
              </ul>
            </Styled.PreviewText>
            <Styled.ButtonsWrapper>
              {project.demo ? (
                <li onClick={soundClickSuccess}>
                  <a rel='noreferrer' target={'_blank'} href={project.demo}>
                    Visit
                  </a>
                </li>
              ) : null}
              {project.code ? (
                <li onClick={soundClickSuccess}>
                  <a rel='noreferrer' target={'_blank'} href={project.code}>
                    <GrGithub />
                  </a>
                </li>
              ) : null}
            </Styled.ButtonsWrapper>
          </Styled.ProjectCard>
        ))}
      </Styled.InnerWrapper>
      <Styled.ScrollInfo>
        <BiUpArrow/>
        <p>Scroll for more</p>
      </Styled.ScrollInfo>
    </Styled.Wrapper>
  );
};

export default ProjectSection;
