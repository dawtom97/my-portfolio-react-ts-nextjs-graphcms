import styled from 'styled-components';

export const Wrapper = styled.div``;
export const InnerWrapper = styled.main`
  padding: 23px;
  @media (min-width: 992px) {
    margin-left: 23%;
    margin-right: 120px;
  
    position: relative;
    &::before {
      position: fixed;
      content: '';
      background-color: ${({ theme }) => theme.text};
      height: 100vh;
      width: 6%;
      top: 0;
      right: 0;
      z-index: -1;
    }
  }
`;

export const LeftBlock = styled.div`
  height: 250px;

  background-color: ${({ theme }) => theme.primary};
  @media (min-width: 992px) {
    display: block;
    height: 100vh;
    width: 22%;
    position: fixed;
    top: 0;
    left: 0;
  }
`;