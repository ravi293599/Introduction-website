import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom";
import { Button } from '../styles/button';
import {useGlobalContext} from "../context";
import { useContext } from 'react';
import { AppContext } from '../context';

const HeroSection = () => {
  const {role, exp, skills} = useContext(AppContext);
  const {name, image} = useGlobalContext();
  return (
    <Wrapper>
        <div className='container grid grid-two-column'>
            <div className='section-hero-data'>
                <p className='hero-small-text'>THIS IS ME</p>
                <h1 className='hero-heading'>{name}</h1>
                <p className='hero-para'>
                    Hey guys , I am a {role} having {exp} of experience in the same,my skill includes {skills}.
                </p>
                <Button className="btn hireme-btn">
                  <NavLink to="/contact">hire me</NavLink>
                </Button>
            </div>
            <div className='section-hero-image'>
              <picture>
                <img src={image} alt="Hero" className='hero-img' />
              </picture>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-small-text {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 75%;
    height: 376px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 3.2rem 0;
    .grid {
      gap: 3.2rem;
      .hero-img {
        height: auto;
    }
    }
  }
`;

export default HeroSection