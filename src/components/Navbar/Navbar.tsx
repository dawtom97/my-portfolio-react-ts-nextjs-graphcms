import React, { useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import styled, { css } from 'styled-components';

interface IStyleProps {
  isVisible: boolean;
}

const Wrapper = styled.header`
  display: flex;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  background-color: #fff;
  height: 80px;
  z-index: 100;
  @media (min-width:992px) {
    box-shadow:0 0 30px rgb(0 0 0 / 8%);
    display: flex;
  padding: 0 7px 0 30px;
    top:40px;
    width: initial;
    left: 50px;
    right: 50px;
    border-radius: 80px;
    & > div {
        display: none;
    }
  }

  & > a {
    max-width: 100px;
    font-size: 18px;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-weight: 700;
  }
  & > div {
    border: 1px solid rgba(255, 255, 255, 0.7);
    & > div:nth-child(2) {
      width: 19px !important;
    }
  }
`;
const Nav = styled.nav<IStyleProps>`
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  padding-top: 120px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  background-color: #fff;
  transform: translateY(-140%);
  transition: transform 0.4s;
  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translateY(0) !important;
    `}
  @media (min-width:992px) {
    position: initial;
    transform: translateY(0);
    height: initial;
    padding: 0;
    width: initial;
    & > div {
        display: none;
    }
    & ul {
      display: flex;
      gap: 25px;
    }
    & ul li a {
      text-decoration: none;
      font-size: 12px;
      color: ${({ theme }) => theme.text};
      font-weight: 700;
    }
  }

  & ul {
    list-style: none;
    text-align: center;
  }
  & li {
    margin: 25px 0;
  }
  & a {
    text-decoration: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text};
    font-weight: 700;
  }
  & button {
    padding: 0 35px;
    border-radius: 64px;
    border: 1px solid ${({theme})=>theme.primary};
    background:none;
    font-size:12px;
    font-weight: 700;
    color:${({theme})=>theme.primary};
    cursor: pointer;
    height: 50px;
    @media (min-width:992px) {
        height: initial;
    }
  }
`;

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Wrapper>
      <a href='/'>Dawid Tomczyk </a>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <Nav isVisible={isOpen}>
        <ul>
          <li>
            <a href=''>HOME</a>
          </li>
          <li>
            <a href=''>PROJECTS</a>
          </li>
          <li>
            <a href=''>ABOUT</a>
          </li>
          <li>
            <a href=''>CONTACTS</a>
          </li>
          <button>DOWNLOAD CV</button>
        </ul>
      </Nav>
    </Wrapper>
  );
};
