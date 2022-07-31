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
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
  
    & > div {
      width: 70%;
      display: flex;
      justify-content: space-between;
      
    }
    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: flex-start;
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
      color: ${({ theme }) => theme.primary};
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
      flex-direction: column;
      @media (min-width:992px) {
        gap: 50px;
        flex-direction: row;
      }
  
   
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
      width: 100%;   
      display: inline-block;
      font-weight: 600;
      @media (min-width:992px) {
        width: 90px;
      }
  
    }
  `;

export const Wrapper = styled.div`  
    margin: 25px;
    border-bottom: 1px solid #e0e1e2;
    padding-bottom: 50px;

    @media (min-width:992px) {
       margin: 0 25px;
       padding:30px 0 50px;
    }
  `;