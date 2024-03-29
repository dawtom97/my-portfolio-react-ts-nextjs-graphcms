import styled from 'styled-components';
export const Wrapper = styled.div`
  margin: 25px;
  border-bottom: 1px solid #e0e1e2;
  padding-bottom: 50px;
  text-align: center;

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

export const TechnologyBox = styled.div`
  text-align: left;
  &  h3 {
    font-size:2.2rem;
  }
  & p {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 5px;
    margin-bottom: 20px;
  }
  & > ul {
    list-style: none;
    & > li {
      font-size: 1.5rem;
      margin:5px 0;
    }
  }
  & > span {
    display: block;
    width:100%;
    height: 2px;
    background-color: ${({theme})=>theme.primary};
    margin: 30px 0;
    position: relative;
    text-align: right;
    line-height: 20px;
    font-weight:700;

    &::before {
      content: '';
      position: absolute;
      top:calc(50% - 5px);
      left:-1px;
      width:10px;
      border-radius: 50%;
      height: 10px;
      background-color: ${({theme})=>theme.primary};
    }

  }
`
export const InnerWrapper = styled.div`
    display: grid;
    @media (min-width:768px) {
      grid-template-columns: repeat(2,1fr);
      grid-gap: 40px;
    }

`