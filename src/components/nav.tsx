import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Nav: React.FC = () => {

    return(
    <>
    <div className='nav-container'>
        <div className='blankdiv'></div>

        <div className='nav-logo'>
            <NavLink
            exact activeClassName='active'
            to='/'>
                <img src='../img/tiki.png'/>
            </NavLink>
        </div>

        
        <div className='nav'>
                    <NavLink
                        exact activeClassName='active'
                        to='/'>
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
                        to='/contact'>
                        <span>Contact</span>
                    </NavLink>
        </div>

        <div className='blankdiv'></div>
    </div>

    </>
    )
}

export default Nav;