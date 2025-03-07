import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { Button } from '../styles/button'
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className='contact-short'>
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready to get started?<br/>
            Talk to us today</h3>
          </div>
          <div className='contact-short-btn'>
            <NavLink to="/about">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>
      <footer>
        <div className='container grid grid-four-column'>
          <div className='contact-about'>
            <h3>Ravi Sharma</h3>
            <p>The Front End Developer</p>
          </div>
          <div className='footer-subscibe'>
            <h3>Subscribe to get important Updates</h3>
            <form action="#">
              <input
              type="text"
              required
              autoComplete='off'
              placeholder='Email'
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <div className='footer-social'>
            <h3>Follow us</h3>
            <div className='footer-social--icons'>
              <a href='#' target="_blank">
                <div>
                  <FaDiscord className='icons' />
                </div>
              </a>
              <a href='#' target="_blank">
                <div>
                  <FaInstagram className='icons' />
                </div>
              </a>
              <a href='#' target="_blank">
                <div>
                  <FaYoutube className='icons' />
                </div>
              </a>
            </div>
          </div>
          <div className='footer-contact'>
            <h3>Contact Us</h3>
            <a href="Tel:+91 9878768866"><h3>+91 9878768866</h3></a>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container">
            <p>@{new Date().getFullYear()} Ravi Sharma . All Rights are Reserved</p>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 7rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child{
      display:flex;
      justify-content: flex-end;
    }
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 2rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;
      text-align: center;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      & > div{
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
      }

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer{
      padding: 10rem 0 2rem 0;
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer