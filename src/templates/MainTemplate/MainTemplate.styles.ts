import styled from 'styled-components';


export const Wrapper = styled.div``;
export const InnerWrapper = styled.main`
  @media (min-width: 992px) {
    margin-left: 36%;
    margin-right: 120px;
    position: relative;
    &::before {
      position: fixed;
      content: '';
      background-color: ${({ theme }) => theme.primary};
      height: 100vh;
      width: 6%;
      top: 0;
      right: 0;
      z-index: -1;
    }
  }
`;