import * as React from 'react';

import { NavLink } from 'react-router-dom';

const Nav: React.FC = () => {

    return(
    <>
    <div className='nav-container'>
        <div className='nav-logo'>

        </div>

        <div className='nav'>
            <span></span>

                    <NavLink
                        exact activeClassName='active'
                        to='/contact'>
                        <span>Home</span>
                    </NavLink>

                    <NavLink
                        activeClassName='active'
                        to='/menu'>
                        <span>Menu</span>
                    </NavLink>

                    <NavLink
                        activeClassName='active'
                        to='/aboutus'>
                        <span>About Us</span>
                    </NavLink>

                    <NavLink
                        activeClassName='active'
                        to='/'>
                        <span>Contact</span>
                    </NavLink>

            <span></span>
        </div>
    </div>

    </>
    )
}

export default Nav;