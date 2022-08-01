import styled from 'styled-components';

export const Button = styled.button`
  padding: 0 35px;
  border-radius: 64px;
  border: 1px solid ${({ theme }) => theme.primary};
  background: none;
  font-size: 12px;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  min-height: 60px;
  max-width: 200px;
  justify-content: center;
  transition: 0.4s;
  & > svg {
    margin-left: 5px;

  }
  @media (min-width: 992px) {
    
  }
`;
