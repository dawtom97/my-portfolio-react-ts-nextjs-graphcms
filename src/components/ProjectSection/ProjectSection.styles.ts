import styled from 'styled-components';

interface ICardProps {
  image: {
    url: string;
  };
}

export const Wrapper = styled.div`
  min-height: 600vh;
  position: relative;
  overflow: hidden;
`;
export const InnerWrapper = styled.div`
  position: fixed;
  left: calc(50% - 150px);
  min-height: 30vh;
  display: flex;
  margin-top: 100px;
  gap: 70px;
  @media (min-width:992px) {
    min-height: 40vh;
    left: 24%;
    margin-top: 0;
  }
  @media (max-width:992px) and (orientation: landscape) {
    margin-top:70px;
  }

`;
export const ProjectCard = styled.article`
  background-color: #fff;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 0 30px rgb(0 0 0 / 8%);
  transition: 0.4s;
  border-radius: 15px;
  & h3 {
    margin-bottom: 10px;
  }
  cursor: pointer;
  &:hover {
    transform: scale(1.035);
    .image::before {
        opacity: 0;
    }
  }
  @media (min-width:992px) {
    width: 600px;
  }
`;

export const Preview = styled.div<ICardProps>`
  background: ${(props) => `url(${props.image.url}) no-repeat top center`};
  background-size: cover;
  height: 200px;
  position: relative;
  transition: 0.4s;
  @media (min-width: 1200px) {
    height: 200px;
  }
  @media (max-width:992px) and (orientation: landscape) {
    display: none;
  }

  &::before {
    content:'';
    position: absolute;
    background-color: ${({ theme }) => theme.primary};
    top:0;
    left:0;
    opacity: 0.9;
    width:100%;
    height: 100%;
    transition: 0.4s;
  }
`;
export const PreviewText = styled.div`
  padding: 15px 15px 0;
  font-size: 1.5rem;
  & ul {
    margin-top: 20px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    color: ${({ theme }) => theme.primary};
    font-weight: 700;
    font-size: 1.3rem;
  }
  & p {
    display: none;
    @media (min-width: 1600px) {
      display: block;
      min-height: 70px;
    }

  }
`;
export const ButtonsWrapper = styled.ul`
  display: flex;
  gap: 15px;
  padding: 15px 15px;
  list-style: none;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-start;
    gap: 10px;
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
    min-height: 40px;
    max-width: 200px;
    justify-content: center;
    text-decoration: none;
    transition: 0.4s;

    &:hover {
      border: 1px solid ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.primary};
    }
  }
  & svg {
    font-size: 18px;
  }
`;


export const ScrollInfo = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%,-50%);
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  @media (max-width:1400px) and (orientation: landscape) {
    display: none;
  }

  & svg {
    font-size: 2.5rem;
    margin-bottom: 5px;
    animation: moveUp 0.5s infinite alternate;
  }

  @keyframes moveUp {
    0% {
        transform: translateY(0);
        opacity: 0.3;
    }
    100% {
        transform: translateY(10px);
        opacity: 1;
    }
  }
`