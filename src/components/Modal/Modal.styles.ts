import styled from 'styled-components'

export const Modal = styled.div`
  & > div {
    background-color: ${({ theme }) => theme.primary};
    border-radius: 30px;
    position: fixed;
    bottom:-50px;
    left:calc(50% - 135px);
    box-shadow: 0 0 30px rgb(0 0 0 / 8%);

    @media (min-width:992px) {
        background-color: #fff;
        left:50px;
    }
  }
  & .modal {
    width: 270px;
    padding: 8px 10px;
    font-weight: 600;
    font-size: 1.2rem;

    .errorText {
        color:#fff;
        @media (min-width:992px) {
            color:${({ theme }) => theme.primary};
    }
    }
    .successText {
        color:#fff;
        @media (min-width:992px) {
            color:${({ theme }) => theme.text};
    }
    }
    
  }
`