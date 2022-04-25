import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './img/tiki.webp';

const Nav: React.FC = () => {
  const TopOfPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="nav-container" id="to-nav-on-click">
        <div className="blankdiv"></div>

        <div className="nav-logo">
          <NavLink exact activeClassName="active" to="/" onClick={TopOfPage}>
            <img alt="twisted tiki logo" src={Logo} />
          </NavLink>
        </div>

        <div className="nav">
          <NavLink exact activeClassName="active" to="/" onClick={TopOfPage}>
            <span>Home</span>
          </NavLink>

          <p className="seperator">|</p>

          <NavLink activeClassName="active" to="/menu" onClick={TopOfPage}>
            <span>Menu</span>
          </NavLink>

          <p className="seperator">|</p>

          <NavLink activeClassName="active" to="/events" onClick={TopOfPage}>
            <span id="EventsNHappenings">Events</span>
          </NavLink>

          <p className="seperator">|</p>

          <NavLink activeClassName="active" to="/contact" onClick={TopOfPage}>
            <span>Contact Us</span>
          </NavLink>
        </div>

        <div className="blankdiv"></div>
      </div>
    </>
  );
};

export default Nav;
