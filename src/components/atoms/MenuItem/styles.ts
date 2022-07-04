import styled from 'styled-components';
import { MenuListProps } from '../../molecules/MenuList/MenuList';


export const Item = styled.li`
  & > a {
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    font-size: 2.2rem;
    @media screen and (min-width:768px) {
    font-size: 1.6rem;
  }
  }

`