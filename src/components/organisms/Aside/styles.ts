import styled from 'styled-components';



export const Container = styled.aside`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    bottom: 0;
    left:1.3rem;
    @media screen and (min-width: 992px) {
      left: 2.5rem;
    }

  & > span {
    display: block;
    height: 12rem;
    width: 3px;
    background-color: #000;
  }
  & > svg {
    font-size: 2.5rem;
    cursor: pointer;
  }

  & > a {
    transform: rotate(270deg);
    color: ${({theme})=>theme.text};
    text-decoration: none;
    font-size: 2rem;
    width: 20px;
    margin-top:50px;
  }
`