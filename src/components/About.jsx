import React from 'react';
import { styled } from 'styled-components';

const About = () => {
  return (
    <Section data-scroll-section>
      <h3>About</h3>
      <p>
        I am a 21 year old Student and currently working as a freelancer in the
        field of website development and also i am well interested in Music
        production. I have a lot of songs on big labels and got supports from
        various big names of the EDM industry.
      </p>
    </Section>
  );
};

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  /* background-color: red; */

  p {
    font-family: poppins;
    font-size: clamp(1rem, 8vw, 4rem);
    line-height: clamp(2.4rem, 7vw, 4rem);
    font-weight: 300;
    /* text-align: justify; */
    letter-spacing: 1px;
    color: var(--secondary-text);
    /* background-color: red; */
  }
  h3 {
    color: var(--main-text);
    font-size: 24px;
    text-transform: uppercase;
  }
`;

export default About;
