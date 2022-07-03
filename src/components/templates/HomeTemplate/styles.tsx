import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 500px;
  @media screen and (min-width: 992px) {
    flex: 1;
    min-height: 100vh;
  }
`;
export const Content = styled.section`
  @media screen and (min-width: 992px) {
    flex: 1;
  }
`;
