import styled from 'styled-components';;

export const Item = styled.li`
  & > a {
    color: ${({theme})=>theme.primary};
    font-weight: 600;
    text-decoration: none;
    font-size: 1.6rem;
  
  }

`