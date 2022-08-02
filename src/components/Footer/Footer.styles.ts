import styled from 'styled-components';

export const Wrapper = styled.footer`
  margin: 35px;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  background-color: #fff;

  &::before {
    content: '';
    position: absolute;
    height: 1px;
    top: calc(70% - 0.5px);
    z-index: -1;
    left: 0;
    width: 100%;
    background-color: #e0e1e2;
    @media (min-width: 1200px) {
      top: calc(50% - 0.5px);
    }
  }

  & p {
    font-weight: 700;
    background-color: #fff;
    padding: 0px 12px;
  }
  @media (min-width: 992px) {
    margin-top: 90px;
    text-align: left;
  }
  @media (min-width: 1200px) {
    & > div {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }
  & a {
    display: inline-block;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    text-align: center;
    line-height: 35px;
    font-size: 14px;
    transition: 0.4s;
    background-color: #fff;
    border: 1px solid #e0e1e2;
    color: ${({ theme }) => theme.text};
    margin: 5px 12px;
    @media (min-width: 992px) {
      margin: 0;
      margin-right: 12px;
      width: 50px;
      line-height: 53px;
      height: 50px;
      font-size: 17px;
    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const IconsBox = styled.div`
  margin-top: 20px;
  @media (min-width: 1200px) {
    margin-top: 0;
  }
`;