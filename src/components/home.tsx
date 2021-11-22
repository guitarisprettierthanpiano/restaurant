import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {

    return (
        <>
        <div className='home-container'>
        <div className='landing-container'>
            <div className='landing-left'>
                <h1>Foody</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum necessitatibus qui tempore amet ducimus dolor aliquam magnam.</p>
                <button>Book A Table</button>
                <div className='blank-landing'></div>
            </div>
            <div className='landing-right'>
                <img></img>
            </div>
        </div>
        </div>
        </>
    )
}

export default Home;