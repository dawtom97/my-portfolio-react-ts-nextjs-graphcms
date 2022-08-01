import React, { RefObject } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import {BiRightArrow } from 'react-icons/bi';

export const Wrapper = styled.div`
  margin: 25px;
  text-align: center;

  & > h3 {
    color: ${({ theme }) => theme.primary};
    font-size: 1.5rem;
    margin-bottom: 40px;
  }
  @media (min-width: 992px) {
    text-align: left;
  }
`;

export const InfoWrapper = styled.div`
  border-radius: 30px;
  border: 1px solid #e0e1e2;
  padding: 23px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  min-height: 300px;
  text-align: left;
`;
export const LeftWrapper = styled.div`
  & > h3 {
    font-size: 2rem;
  }
  & > p {
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.primary};
  }
`;

export const RightWrapper = styled.div`
  & > p {
    font-size: 1.3rem;
    margin: 8px 0;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    & > span {
      color: #fb3f5c;
    }
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 30px;
    & > div {
      flex: 1;
    }
  }
`;

export const FormWrapper = styled.div`
  & form {
    display: flex;
    flex-direction: column;
    gap: 33px;

    & input {
      padding: 0 23px;
      display: block;
      height: 50px;
      width: 100%;
      outline: none;
      border-radius: 30px;
      border: 1px solid #e0e1e2;
    }

    & div {
      position: relative;
    }

    & label {
      position: absolute;
      top: -10px;
      background-color: #fff;
      font-size: 1.2rem;
      font-weight: 700;
      padding: 5px;
      left: 20px;
    }

    & textarea {
      border-radius: 30px;
      padding: 23px;
      outline: none;
      width: 100%;
      display: block;
      border: 1px solid #e0e1e2;
      height: 200px;
      resize: none;
    }

    & button {
      width: 100%;
      max-width: 100%;
    }
  }
`;

interface IContact {
  contactInfo: {
    email: string;
    telephone: string;
    residence: string;
  };
  innerRef:RefObject<HTMLDivElement>
}

export const ContactSection = ({ innerRef, contactInfo }: IContact) => {
  return (
    <Wrapper ref={innerRef}>
      <Heading level='h2'>Contact</Heading>
      <Heading level='h3'>LET&apos;S TALK</Heading>
      <InnerWrapper>
        <FormWrapper>
          <form action=''>
            <div>
              <label htmlFor='Name'>FULL NAME*</label>
              <input id='Name' type='text' placeholder='Dawid Tomczyk' />
            </div>

            <div>
              <label htmlFor='Email'>EMAIL ADDRESS*</label>
              <input type='text' placeholder='example@domain.com' />
            </div>

            <div>
              <label htmlFor='Message'>MESSAGE*</label>
              <textarea placeholder='To write'></textarea>
            </div>

            <Button type='submit'>SEND MESSAGE <BiRightArrow/></Button>
          </form>
        </FormWrapper>
        <InfoWrapper>
          <LeftWrapper>
            <Heading level='h3'>Dawid Tomczyk</Heading>
            <p>Front-End Developer</p>
          </LeftWrapper>
          <RightWrapper>
            <p>
              <span>RESIDENCE:</span> {contactInfo.residence}
            </p>
            <p>
              <span>PHONE:</span> {contactInfo.telephone}
            </p>
            <p>
              <span>EMAIL:</span> {contactInfo.email}
            </p>
          </RightWrapper>
        </InfoWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};
