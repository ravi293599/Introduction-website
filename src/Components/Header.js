import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src="./images/logo.png" alt="logo" class="logo" />
        </NavLink>
        <Navbar />
    </MainHeader>
  );
};
const MainHeader = styled.header`
padding: 0 4.8rem;
height: 8rem;
background-color: ${({theme}) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
.logo{
    max-width: 45%;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  padding: 0 2.8rem;
  .logo{
    max-width: 50%;
  }
}
`

export default Header