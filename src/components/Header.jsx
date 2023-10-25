import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { Power1 } from 'gsap/all';

const Header = () => {
  useEffect(() => {
    // gsap.from(".section-header", {
    //   opacity: 0,
    //   y: 500,
    // });

    gsap.to('.section-header', {
      opacity: 1,
      y: 0,
      ease: Power1,
    });
  }, []);
  return (
    <section data-scroll-section>
      <Container className="section-header">
        <h1>Mustak Choudhary</h1>
        <ul>
          <li>Intro</li>
          <li>About</li>
          {/* <li></li> */}
        </ul>
      </Container>
    </section>
  );
};

const Container = styled.div`
  position: relative;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5vh;
  ul {
    display: flex;

    color: var(--secondary-text);
    text-transform: uppercase;
    letter-spacing: 2px;
    li {
      margin: 10px;
      list-style: none;
      font-size: 24px;
      cursor: pointer;
      display: inline-block;
      &:after {
        content: '';
        transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        background-color: #626262;
        height: 2px;
        width: 0%;
        display: block;
      }

      &:hover:after {
        width: 100%;
      }
    }
  }
  h1 {
    font-family: 'CELEBRATE RETRO';
    color: var(--main-text);
    font-size: 15vw;
    text-align: center;
    letter-spacing: 12px;
    line-height: 15vw;
    text-transform: uppercase;
  }
  transform: translateY(500px);
  opacity: 0;
`;

export default Header;
