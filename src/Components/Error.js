import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/button';

const Error = () => {
  return (
    <Wrapper>
        <img src="./images/error.svg" />
        <NavLink to="/">
            <Button className='btn'>Go Back</Button>
        </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
    padding: 9rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
        width:30%;
    }
    .btn{
        font-size: 1.8rem;
        margin-top: 3rem;
    }
`

export default Error