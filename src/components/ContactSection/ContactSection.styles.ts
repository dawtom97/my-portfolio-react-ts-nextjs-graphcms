import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 25px;
  text-align: center;

  & > h3 {
    color: ${({ theme }) => theme.primary};
    font-size: 1.5rem;
    margin-bottom: 40px;
  }
  @media (min-width: 992px) {
    text-align: left;
  }
`;

export const InfoWrapper = styled.div`
  border-radius: 30px;
  border: 1px solid #e0e1e2;
  padding: 23px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  min-height: 300px;
  text-align: left;
`;
export const LeftWrapper = styled.div`
  & > h3 {
    font-size: 2rem;
  }
  & > p {
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.primary};
  }
`;

export const RightWrapper = styled.div`
  & > p {
    font-size: 1.3rem;
    margin: 8px 0;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    & > span {
      color: #fb3f5c;
    }
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 30px;
    & > div {
      flex: 1;
    }
  }
`;

export const ErrorsBox = styled.div`
  min-height: 50px;
  & > p {
    color:${({theme})=>theme.primary};
    font-size: 1.1rem;
    margin:4px 0;
    font-weight: 600;
  }
`

export const FormWrapper = styled.div`
  & form {
    display: flex;
    flex-direction: column;
    gap: 33px;

    & input {
      padding: 0 23px;
      display: block;
      height: 50px;
      width: 100%;
      outline: none;
      border-radius: 30px;
      border: 1px solid #e0e1e2;
    }

    & div {
      position: relative;
    }

    & label {
      position: absolute;
      top: -10px;
      background-color: #fff;
      font-size: 1.2rem;
      font-weight: 700;
      padding: 5px;
      left: 20px;
    }

    & textarea {
      border-radius: 30px;
      padding: 23px;
      outline: none;
      width: 100%;
      display: block;
      border: 1px solid #e0e1e2;
      height: 180px;
      resize: none;
    }

    & button {
      width: 100%;
      max-width: 100%;
    }
  }
`;