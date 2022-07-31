import styled, { css } from 'styled-components';

interface IStyledProps {
    isActive: boolean;
  }
  
  export const CircleButton = styled.button<IStyledProps>`
    width: 15px;
    height: 15px;
    border: 2px solid #fb3f5c;
    background-color: transparent;
    border-radius: 50%;
    transition: 0.4s;
    cursor: pointer;
    ${({ isActive }) =>
      isActive &&
      css`
        background-color: #fb3f5c;
      `}
  `;
  export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
  
    & > div {
      width: 70%;
      display: flex;
      justify-content: space-between;
    }
    @media (min-width: 768px) {
      flex-direction: row;
      gap: 50px;
      & > div {
        width: 30%;
        justify-content: space-between;
      }
    }
  `;
  
  export const Heading = styled.h2`
    color: #262728;
    font-size: 5.5rem;
  `;
  export const InfoWrapper = styled.div`
    font-size: 1.5rem;
  
    & > h3 {
      color: #fb3f5c;
      text-transform: uppercase;
    }
    & > p {
      margin: 1.5rem 0;
      font-weight: 300;
      min-height: 120px;
    }
  `;
  
  export const ContactWrapper = styled.div`
    margin-top: 2.6rem;
    ul {
      list-style: none;
      display: flex;
      gap: 50px;
      div {
        width: 50%;
      }
    }
    li {
      font-weight: 600;
      font-size: 1.4rem;
      color: #fb3f5c;
      margin: 7px 0;
    }
    span {
      color: #262728;
    }
    strong {
      width: 90px;
      display: inline-block;
      font-weight: 600;
    }
  `;
  
  export const Wrapper = styled.div`
    max-width: 700px;
    padding: 25px;
  `;