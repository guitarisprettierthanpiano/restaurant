import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './img/tiki.webp';

const Footer: React.FC = () => {
    
  //goto contact page on click
  const TopOfPage: () => void = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <img alt="twisted tiki logo" src={Logo} loading="lazy" />

      <div className="footer-p">
        <p>
          2022 Ke Aloha Street
          <br />
          Raleigh, North Carolina
          <br />
          <br />
          Ph. (919) 101-2022
        </p>
      </div>

      <NavLink activeClassName="active" to="/contact" onClick={TopOfPage}>
        <button>Contact Us</button>
      </NavLink>
    </div>
  );
};

export default Footer;
