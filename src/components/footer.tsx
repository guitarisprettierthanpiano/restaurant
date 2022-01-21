import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
    return(
    <div className='footer'>
        <img src='../img/tiki.png'/>
        <div className='footer-p'>
            <p>340 Corey Avenue <br/> St. Pete Beach, Florida <br/><br/>Ph. (727) 914-8881</p>
        </div>
        <NavLink
        activeClassName='active'
        to='/'>
            <button>Contact Us</button>
        </NavLink>
    </div>
    )
}

export default Footer;