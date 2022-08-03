import Image from 'next/image';
import React, { useContext, useState } from 'react';
import TypeAnimation from 'react-type-animation';
import styled from 'styled-components';
import { imageLoader } from '../../utils/imageLoader';
import { Heading } from '../Heading/Heading';
import { GrClose } from 'react-icons/gr';
import { SoundContext } from '../../context/SoundContext';
import { motion } from 'framer-motion';

export const Wrapper = styled.main`
  text-align: center;
  @media (min-width: 992px) {
    text-align: left;
    margin-top: 120px;
  }
  & article {
    border: 1px solid ${({ theme }) => theme.text};
    cursor: pointer;
    & img {
      object-fit: cover;
    }
  }
  & > h3 {
    color: ${({ theme }) => theme.primary};
    text-transform: uppercase;
    font-size: 1.5rem;
  }
`;
export const InnerWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 25px;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;
export const ReferenceImage = styled.img``;
export const ImagePreview = styled.div`
  width: 90%;
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80%;
  max-width: 500px;
  max-height: 800px;
  z-index: 1000;
  @media (max-width:992px) and (orientation:landscape) {
    position: absolute;
  }

  & button {
    position: absolute;
    top: 15px;
    cursor: pointer;
    right: 15px;
    border: none;
    background: transparent;
    font-size: 20px;
    & svg {
      color: ${({ theme }) => theme.primary};
    }
  }

  & img {
    object-fit: cover;
    width: 100%;
  }
`;

export const Shadow = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 999;
  background-color: #000;
  opacity: 0.7;
`;

interface IReference {
  reference: {
    preview: {
      id: string;
      url: string;
    };
  }[];
}

export const ReferenceSection = ({ reference }: IReference) => {
  const [currentImg, setCurrentImg] = useState<number | null>(null);
  const { soundClickSuccess } = useContext(SoundContext);

  const showBiggerImage = (id: number) => {
    setCurrentImg(id);
    soundClickSuccess();
  };
  const closePreview = () => {
    setCurrentImg(null);
    soundClickSuccess();
  };

  return (
    <Wrapper>
      <Heading level='h1'>My reference</Heading>
      <TypeAnimation
        cursor={true}
        sequence={['Opinions about me', 1500, 'Opinions about me']}
        wrapper='h3'
      />
      <InnerWrapper>
        {reference.map(({ preview }: any, index: number) => (
          <article key={preview.id} onClick={() => showBiggerImage(index)}>
            <Image
              loader={imageLoader}
              src={preview.url}
              alt='Picture of the reference'
              width={300}
              height={450}
            />
          </article>
        ))}
      </InnerWrapper>
      {typeof currentImg === 'number' && (
        <div>
          <Shadow />
          <ImagePreview
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button onClick={closePreview}>
              <GrClose />
            </button>
            <img src={reference[currentImg].preview.url} alt='' />
          </ImagePreview>
        </div>
      )}
    </Wrapper>
  );
};
