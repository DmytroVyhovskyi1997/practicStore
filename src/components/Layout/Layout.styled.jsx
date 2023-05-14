import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
color: black;
font-size:32px;
font-weight:bold;
padding-bottom: 5px;
position: relative;
margin-right:50px;

&.active {
  color: #463256;;
  &::after,
  hover {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0;
    bottom: 0;
    background-color: #463256;;
    border-radius: 2px;
  }
}
`
export const Header = styled.div`
padding: 24px 0px;
min-width: 480px;
background: linear-gradient(114.99deg, rgb(244 243 244) -0.99%, rgb(87, 54, 163) 54.28%, rgb(87 82 100) 78.99%);
);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-bottom: 1px solid #ececec;
`

export const Nav = styled.nav`
display: flex;
  margin-left: 100px;
  margin-top: 30px;
  margin-bottom: 30px;
`