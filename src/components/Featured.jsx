import React from 'react';
import styled from 'styled-components';
import photos from '../data';

const Featured = () => {
  const [F_url, S_url] = photos;
  return (
    <FeaturedSec data-scroll-section>
      <div className="row">
        <h6>Miii</h6>

        <img src={F_url} alt="" srcset="" />
      </div>

      <div className="col">
        <h6>Random</h6>
        <img src={S_url} alt="" srcset="" />
      </div>
    </FeaturedSec>
  );
};

const FeaturedSec = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;

  color: var(--main-text);
  margin-bottom: 50px;

  img {
    clip-path: inset(0% 0% 0%);
  }
  h6 {
    text-transform: uppercase;
    font-size: 24px;
    letter-spacing: 2px;
  }
  .row,
  .col {
    display: grid;
    gap: 10px;
  }
  .row {
    grid-template-rows: repeat(2, auto);
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .col {
    grid-template-columns: 100px auto;
    align-items: flex-end;
    img {
      width: 100%;
      height: 125vh;
      object-fit: cover;
    }
    h6 {
      transform: translate(100%) rotate(-90deg);
      transform-origin: left bottom;
      justify-self: self-end;
    }
  }
`;

export default Featured;
