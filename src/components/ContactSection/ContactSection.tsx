import * as Styled from './ContactSection.styles';
import React, { RefObject, SyntheticEvent, useContext, useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { BiRightArrow } from 'react-icons/bi';
import { SoundContext } from '../../context/SoundContext';
import { Modal } from '../Modal/Modal';
import { AnimatePresence } from 'framer-motion';


interface IContact {
  contactInfo: {
    email: string;
    telephone: string;
    residence: string;
  };
  innerRef: RefObject<HTMLDivElement>;
}

const initialState = {
  email: '',
  fullName: '',
  content: '',
};

export const ContactSection = ({ innerRef, contactInfo }: IContact) => {
  const [email, setEmail] = useState<any>(initialState);
  const [errors, setErrors] = useState<string[]>([]);
  const {soundClickFailure, soundClickSuccess} = useContext(SoundContext);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(prev => !prev);
  const closeModal = () => setModalOpen(false)

  useEffect(()=>{
    const toggler = setTimeout(()=>{
       closeModal()
    },3000);
    return () => clearInterval(toggler);
  },[modalOpen])


  const validateEmail = (data: any) => {
    const errors: string[] = [];
    if (!data.fullName.length) errors.push('Username is requried');
    if (!data.email.toLowerCase().match(/\S+@\S+\.\S+/)) errors.push('Incorrect email address');
    if (data.content.length < 5) errors.push('Message is too short');
    if (!errors.length) return true;
    else return errors;
  };

  const sendEmail = async (e: SyntheticEvent) => {
    e.preventDefault();
    const isValid = validateEmail(email);
    if (isValid === true) {
      fetch('/api/email', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(email),
      });
      setEmail(initialState);
      soundClickSuccess();
      openModal();
      setErrors([]);
    } else {
      setErrors(isValid);
      soundClickFailure();
      openModal();
    }
    console.log(errors);

  };

  const handleEmail = (e: any) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  return (
    <Styled.Wrapper ref={innerRef} id='contact'>
      <Heading level='h2'>Contact</Heading>
      <Heading level='h3'>LET&apos;S TALK</Heading>
      <Styled.InnerWrapper>
        <Styled.FormWrapper>
          <form action='' onSubmit={(e) => sendEmail(e)}>
            <div>
              <label htmlFor='Name'>FULL NAME*</label>
              <input
                onChange={handleEmail}
                value={email.fullName}
                name='fullName'
                id='Name'
                type='text'
                placeholder='Dawid Tomczyk'
              />

            </div>

            <div>
              <label htmlFor='Email'>EMAIL ADDRESS*</label>
              <input
                onChange={handleEmail}
                value={email.from}
                name='email'
                type='text'
                placeholder='example@domain.com'
              />
       
            </div>

            <div>
              <label htmlFor='Message'>MESSAGE*</label>
              <textarea
                onChange={handleEmail}
                value={email.content}
                name='content'
                placeholder='To write'
              ></textarea>
            </div>
            <Button disabled={modalOpen ? true : false} type='submit'>
              SEND MESSAGE <BiRightArrow />
            </Button>
          </form>
        </Styled.FormWrapper>
        <Styled.InfoWrapper>
          <Styled.LeftWrapper>
            <Heading level='h3'>Dawid Tomczyk</Heading>
            <p>Front-End Developer</p>
          </Styled.LeftWrapper>
          <Styled.RightWrapper>
            <p>
              <span>RESIDENCE:</span> {contactInfo.residence}
            </p>
            <p>
              <span>PHONE:</span> {contactInfo.telephone}
            </p>
            <p>
              <span>EMAIL:</span> {contactInfo.email}
            </p>
          </Styled.RightWrapper>
        </Styled.InfoWrapper>
      </Styled.InnerWrapper>
      <AnimatePresence initial={true} exitBeforeEnter={true} onExitComplete={() => null}>
        {modalOpen && <Modal isError={errors.length ? true : false}  msg={errors.length ? 'Incorrect email or message' : 'Message sent'} />}
      </AnimatePresence>
    </Styled.Wrapper>
  );
};
