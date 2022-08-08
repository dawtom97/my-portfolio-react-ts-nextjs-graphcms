import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 25px;
  border-bottom: 1px solid #e0e1e2;
  padding-bottom: 50px;
  text-align: center;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 992px) {
    margin: 0 25px;
    min-height: 100vh;
    padding: calc(10% + 80px) 0 50px;
    text-align: initial;
    & button {
      margin: 0;
    }
  }

  & > h3 {
    color: ${({ theme }) => theme.primary};
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  & > p {
    margin: 1.5rem 0;
    font-weight: 300;
    font-size: 1.5rem;
    min-height: 80px;
    max-width: 650px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  & button {
    color: ${({ theme }) => theme.text};
    border: 1px solid #e0e1e2;
  }

  & button:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }

  & button:nth-child(2) {
    padding: 0;
    width: 60px;
    height: 60px;
    font-size: 28px;
    text-align: center;
    line-height: 70px;
    & svg {
      margin-left: 0;
      animation: jump 1.2s infinite alternate;
    }
  }

  @media (min-width: 992px) {
    justify-content: flex-start;
  }

  @keyframes jump {
    0% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(5px);
    }
  }
`;