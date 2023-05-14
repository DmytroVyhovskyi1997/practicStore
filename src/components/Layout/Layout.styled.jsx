import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
color: black;
padding-bottom: 5px;
position: relative;

&.active {
  color: red;
  &::after,
  hover {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0;
    bottom: 0;
    background-color: red;
    border-radius: 2px;
  }
}
`