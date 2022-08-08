import styled from 'styled-components';

export const Wrapper = styled.div``;
export const InnerWrapper = styled.main`
 
  & > h3 {
    display: none;
    margin-bottom: 30px;
    color: #fb3f5c;
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  & h1 {
    display: none;
  }

  @media (min-width:992px) {
    margin-top: 155px;
  }
  @media (min-width: 1400px) {
    & h1,
    h3 {
      display: block;
    }
  }
  @media (min-width: 1200px) {
    margin-left: 24%;
    margin-right: 120px;
    position: relative;

    &::before {
      position: fixed;
      content: '';
      background-color: #e0e1e2;
      height: 100vh;
      width: 6%;
      top: 0;
      right: 0;
      z-index: -1;
    }
  }
`;

export const LeftBlock = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
    height: 100vh;
    width: 22%;
    position: fixed;
    background-color: ${({ theme }) => theme.text};
    top: 0;
    left: 0;
  }
`;