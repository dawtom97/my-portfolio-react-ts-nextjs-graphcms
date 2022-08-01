import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 25px;
  border-bottom: 1px solid #e0e1e2;
  padding-bottom: 50px;
  text-align: center;

  .swiper {
    padding-bottom: 60px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    border: 1px solid #e0e1e2;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    top: 85%;
    transition: 0.4s;

    &:hover {
      border: 1px solid ${({ theme }) => theme.primary};
      &::after {
        color: ${({ theme }) => theme.primary};
      }
    }

    &::after {
      transform: scale(0.4);
      color: #5f5f5f;
      font-weight: 700;
      transition: 0.4s;
    }
  }

  .swiper-button-prev {
    position: absolute;
    left: calc(90% - 120px);
    @media (min-width: 992px) {
      left: calc(90% - 90px);
    }
    @media (min-width: 1200px) {
      left: calc(90% - 80px);
    }
  }

  @media (min-width: 992px) {
    margin: 0 25px;
    padding: 30px 0 50px;
    text-align: left;
  }
  & > h3 {
    color: ${({ theme }) => theme.primary};
    font-size: 1.5rem;
    margin-bottom: 40px;
  }
`;

export const ExperienceCard = styled.article`
  text-align: left;

  & > p {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 5px;
    margin-bottom: 20px;
  }
  & > ul {
    list-style: none;
    & > li {
      font-size: 1.5rem;
      margin: 5px 0;
    }
  }
`;

export const CardHeading = styled.div`
  color: ${({ theme }) => theme.primary};
  & h3 {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }
  & > p {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-start;
    gap: 22px;
  }
  & a {
    padding: 0 35px;
    border-radius: 64px;
    border: 1px solid #e0e1e2;
    background: none;
    font-size: 12px;
    display: flex;
    align-items: center;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    min-height: 60px;
    max-width: 200px;
    justify-content: center;
    text-decoration: none;
    transition: 0.4s;

    &:hover {
      border: 1px solid ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.primary};
    }
  }
`;
