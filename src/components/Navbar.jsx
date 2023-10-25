import styled from 'styled-components';
import { BsArrowReturnRight } from 'react-icons/Bs';

const Navbar = () => {
  return (
    <Navigation data-scroll-section>
      <div>Index</div>
      <div>M&C</div>
      <div className="contact">
        {' '}
        <span>Contact</span>
      </div>
    </Navigation>
  );
};

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 0px;
  color: var(--secondary-text);
  font-size: 24px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export default Navbar;
