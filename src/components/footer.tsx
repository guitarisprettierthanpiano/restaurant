import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
    const TopOfPage = () => {
        window.scrollTo(0, 0)
    };

    return(
    <div className='footer'>
        <img src='./././img/tiki.png' loading='lazy'/>

        <div className='footer-p'>
            <p>2022 Ke Aloha Street 
            <br/> 
            Raleigh, North Carolina
            <br/>
            <br/>
            Ph. (919) 101-2022</p>
        </div>

        <NavLink
        activeClassName='active'
        to='/contact'
        onClick = {TopOfPage}>
            <button>Contact Us</button>
        </NavLink>
    </div>
    )
}

export default Footer;