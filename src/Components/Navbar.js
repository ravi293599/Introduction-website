import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { CgMenu, CgCloseR } from 'react-icons/cg'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
  return (
    <Nav>
        <div className= {openMenu ? 'menuIcon active' : 'menuIcon'}>
            <ul className='navbar-list'>
                <li>
                    <NavLink to="/" className = "navbar-link"
                     onClick={() => setOpenMenu(false)} >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className = "navbar-link"
                     onClick={() => setOpenMenu(false)}
                     >About</NavLink>
                </li>
                <li>
                    <NavLink to="/services" className = "navbar-link"
                    onClick={() => setOpenMenu(false)}
                     >Services</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className = "navbar-link"
                    onClick={() => setOpenMenu(false)}
                    >Contact</NavLink>
                </li>
            </ul>
            <div className='mobile-navbar-btn'>
                <CgMenu name="menu-outline" class="mobile-nav-icon" 
                onClick={() => setOpenMenu(true)} />
                <CgCloseR name="close-outline" class="close-outline mobile-nav-icon"
                onClick={() => setOpenMenu(false)} />
            </div>
        </div>
    </Nav>
  )
}
const Nav = styled.nav`
.navbar-list{
    display: flex;
    gap: 4.8rem;
    li{
        list-style: none;
        .navbar-link{
            &:link,
            &:visited{
                display: inline-block;
                text-decoration: none;
                font-size: 1.8rem;
                text-trasform: uppercase;
                color: ${({theme}) => theme.colors.black};
                transition: color 0.3s linear;
            }
            &:hover,
            &:active{
                color: ${({theme}) => theme.colors.helper};
            }
        }
    }
}
.mobile-navbar-btn{
    display: none;
    .close-outline{
        display: none;
    }
}
.mobile-navbar-btn[name="close-outline"]{
    display: none;
}
@media (max-width: ${({ theme }) => theme.media.mobile }){
    .mobile-navbar-btn{
        display: inline-block;
        z-index: 20;
        border: ${({ theme })=> theme.colors.black };
        .mobile-nav-icon{
            font-size: 4.2rem;
            color: ${({ theme })=> theme.colors.black };
        }
    }
    .navbar-list{
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 1;
        transform: translateX(100%);
        visibility: hidden;
        opacity: 0;
        display: none;
        li{
            .navbar-link{
                &:link,
                &:visited{
                    font-size: 3.2rem;
                }
            }
        }

    }
    .active .mobile-nav-icon{
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color: ${({theme}) => theme.colors.black};
        x-index: 5;
    }
    .active .close-outline{
        display: inline-block;
        z-index: 7;
    }
    .active .navbar-list{
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 7;
        display: flex;
    }
}
`;

export default Navbar