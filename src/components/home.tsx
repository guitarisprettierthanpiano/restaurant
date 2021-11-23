import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {

    return(
    <div className='home-container'>
        <div className='home-landing'>
            <div className='landing-left'>
                <div className='blank-landing'></div>
                <h1>Foody</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum necessitatibus qui tempore amet ducimus dolor aliquam magnam.</p>
                <button>Book A Table</button>
                <div className='blank-landing'></div>
            </div>
            <div className='landing-right'>
                <img src='./././img/test.jpg'></img>
            </div>
        </div>

        <div className='gallery'>
            <h1>Gallery</h1>
            <div className='gallery-img-container'>
                <img src='./././img/test.jpg'></img>
                <img src='./././img/test.jpg'></img>
                <img src='./././img/test.jpg'></img>
                <img src='./././img/test.jpg'></img>
            </div>
        </div>

        <div className='yellow-part'>
                <div className='yellow-left'>
                    <span></span>
                    <span>C</span>
                    <h4>Quality</h4>
                    <span>We serve the best sehepper food.</span>
                    <span></span>
                </div>
                <div className='yellow-middle'>
                    <span></span>
                    <span>N</span>
                    <h4>Passion</h4>
                    <span>We serve the food with love and passion.</span>
                    <span></span>
                </div>
                <div className='yellow-right'>
                    <span></span>
                    <span>A</span>
                    <h4>Affordable</h4>
                    <span>A food that's worth the penny.</span>
                    <span></span>
                </div>
        </div>

        <div className='rest-is'>
            <div className='rest-is-left'>
                <img src='./././img/test.jpg'></img>
            </div>
            <div className='rest-is-right'>
                <span></span>
                <h1>Restaurant is...</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium? Culpa, rem fugiat? Maxime ab ipsa a perspiciatis?</p>
                <span></span>
            </div>
        </div>
    </div>
    )
}

export default Home;