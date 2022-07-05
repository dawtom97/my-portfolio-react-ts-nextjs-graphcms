import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  position: relative;
  width: 100%;
  margin-left: 20px;
  min-height: 400px;
  padding:25px;
  @media screen and (min-width:992px) {
     width: 400px;
   }

  & > div {
    margin: 20px 0;
    border-bottom: 1px solid gray;

    & > h2 {
        font-size: 2.4rem;
        color:${({ theme }) => theme.primary};
        font-weight: 600;
    }
    & > p {
        font-size: 1.6rem;
    }
  }

  &::before {
      content: "";
      position: absolute;
      width:100%;
      height: 100%;
      top: -5px;
    left: -5px;
    border-left: 5px dotted ${({ theme }) => theme.text};;
    border-top: 5px dotted ${({ theme }) => theme.primary};;
    }
    &::after {
      content: "";
      position: absolute;
      width:100%;
      height: 100%;
      left: -15px;
    top: -15px;
    border-left: 5px solid ${({ theme }) => theme.primary};
    border-top: 5px solid ${({ theme }) => theme.text};
    }

`