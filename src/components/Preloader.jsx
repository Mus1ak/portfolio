import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import photos from '../data';
import { Power2, gsap } from 'gsap';

const Preloader = ({ setPreloader }) => {
  const [F_url, S_url, T_url] = photos;

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setPreloader]);

  return (
    <Container className="container" imgUrl={T_url}>
      <h1>Mustak Choudhary</h1>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  /* background-image: ${(props) => `url(${props.imgUrl})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 70% 90%; */
  display: grid;
  place-items: center;
  color: var(--main-text);
  text-transform: uppercase;
  letter-spacing: 20px;
  z-index: 1;
  h1 {
    font-size: 56px;
  }
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
`;

export default Preloader;
