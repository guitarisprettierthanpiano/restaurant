import * as React from 'react';

const Contact: React.FC = () => {

    return (
    <div className='contact-container'>

        <div className="parallax">   
            <p>Welcome to Twisted Tiki!</p> 
        </div>

        <div className='below-paral'>
            <img src='../img/tiki1.webp'/>
            <img src='../img/tiki1.webp'/>
            <img src='../img/tiki1.webp'/>
            <img src='../img/tiki1.webp'/>
        </div>

        <div className='parallax2'>
            <div className='hours-container'>
                <div className='hours'>
                    <h1>Hours</h1>
                    <ul>
                        <li>mon - thurs</li>
                        <li> fri sat </li>
                        <li> sun</li>
                        <li>brunch at 11am</li>
                    </ul>
                </div>
                <div className='happy-hour'>
                    <h1>Happy Hour</h1>
                        <li>$13</li>
                        <li>4 </li>
                        <li>5</li>
                        <li>5</li>
                        <li>15</li>
                </div>
            </div>
        </div>

        <div className='come-on-in'>
            <div className='come-on-in-left'></div>
            <div className='come-on-in-right'>
                <h1>Come On In</h1>
                <h1>Tropical Vibes Inside!</h1>
                    <p>Get ready to experience the tropical vibe at Twisted Tiki. Our Polynesian-inspired cocktails along with our eclectic tiki décor are your ticket to paradise!

                    What's a tropical tiki bar without some music? Expect to find the area's best bands & musicians here at Twisted Tiki along with other fun events like Art Night, Paint Night, Trivia Night and more!

                    Every day is a day in paradise at The Twisted Tiki. Aloha!</p>
            </div>
        </div>

        <div className="parallax3">
            <p>Mapbox OpenStreetMap React!</p>
        </div>
    </div>
    )
}

export default Contact;