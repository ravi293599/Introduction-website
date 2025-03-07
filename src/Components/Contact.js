import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <h2 className='common-heading'>feel free to contact</h2>
      <iframe title='map'
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9707040917647!2d77.0694760145186!3d28.450299499057348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18ec3fffffff%3A0xf3b98f4eb9b438df!2sPolicybazaar%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1676110761282!5m2!1sen!2sin"
       width="100%" 
       height="350"
      style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className='container'>
        <div className='contact-form'>
          <form action='https://formspree.io/f/xbjegaqj' method='POST'>
            <div className='contact-inputs'>
            <input 
            type="text"
            name="username"
            placeholder="username"
            autoComplete='off'
            required
            />
            <input 
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete='off'
            required
            />
            <textarea
            name="message"
            cols="30"
            rows="6"
            autoComplete='off'
            required
            ></textarea>
            <input type="submit" value="send" />
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
  @media (max-width:${({ theme }) => theme.media.mobile}) {
    padding: 3.2rem 0;
  }
`;

export default Contact