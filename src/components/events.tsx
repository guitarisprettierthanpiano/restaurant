import React from 'react';

import Mural from './img/mural.webp';
import FlowerTexture from './img/flowertexture.webp'
import Trivia from './img/trivia.webp';
import Art from './img/art.webp';
import Music from './img/music.webp';

const Events: React.FC = () => {

    return (
    <div className='events-container'>
        <div className='events-parallax' style={{backgroundImage: `url(${Mural})`}}>
            <div className='upcoming-events'>
                <h2>Events & Entertainment</h2>

                <h5>Music Times</h5>
                <p>Fri & Sat 7pm to 11pm, Sunday 3pm to 7pm.  Local musicians every other Tuesday 5pm to 9pm. (Unless otherwise specified below).</p>

                <h4>April</h4>
                <div className='left-events'>
                        <p>1 - John Kyle Rodhe 7pm - 11pm</p>
                        <p>2 - Country with HorsesWild 4pm</p>
                        <p>3 - Jason Alan 4pm - 8pm</p>
                        <p>4 - Trivia 7pm</p>
                        <p>6 - Corey Ave. Market / One Kin Roof Fundraiser 2pm - 6pm</p>
                        <p>9 - Reggae Night with Jahfari 7pm - 11pm</p>
                        <p>11 - Trivia 7pm</p>
                        <p>13 - Game Show Night 7pm</p>
                        <p>14 - Paint Night 6:30pm</p>
                        <p>15 - tba</p>
                        <p>16 - Pete & Dean 3pm - 7pm / Doug South 7pm - 10pm</p>
                </div>
                <div className='right-events'>
                        <p>17 - Easter Egg Charity Hunt 3pm</p>
                        <p>18 - Trivia 7pm</p>
                        <p>19 - Kevin Toon 5pm - 9pm</p>
                        <p>20 - tba</p>
                        <p>22 - Jason Alan 7pm - 11pm</p>
                        <p>23 - Corey Ave. Craft Festival</p>
                        <p>24 - Corey Ave. Craft Festival / HorsesWild 5pm - 9pm</p>
                        <p>26 - Paint Night 6:30pm</p>
                        <p>27 - Game Show Night 7pm</p>
                        <p>29 - John Kyle Rodhe 7pm - 11pm</p>
                        <p>30 - HorsesWild 7pm</p>
                </div> 

                <h3>Happy Hour 7 Days A Week!</h3>
                <h6>Every Day All Day!</h6>
                <div className='events-happy-list'>
                    <p>$13 Domestic Beer Buckets</p>
                    <p>$4 Fireball Shots</p>
                    <p>$5 House Wines</p>
                    <p>$5 Captain Morgan, Bacardi & Smirnoff</p>
                </div>

            </div>
        </div>

        <div className='events-bottom' style={{backgroundImage: `url(${FlowerTexture})`}}>
            <div className='trivia-night'>
                <img loading='lazy' id='trivia-img' src={Trivia}></img>
                <h2>Trivia Night</h2>
                <h4>Mondays 6:30 p.m.</h4>
                <p>Win bar tabs! Free to play.</p> 
            </div> 

            <div className='guest-musician'>
                <img loading='lazy' src={Music}></img>
                <h2>Local Musicians</h2>
                <h4>Every Other Tuesday 5 p.m. - 9 p.m.</h4>
                <p>Chill out with us at Twisted Tiki every other Tuesday night with the music of the area!</p>
            </div>

            <div className='art-night'>
                <img loading='lazy' src={Art}></img>
                <h2 className='animate-h2'>Art Night</h2>
                <h4>Monthly - check the schedule for times</h4>
                <p>Enjoy some great music while you browse and shop with some great local artisans!</p>
            </div>
        </div>
    </div>
    )
}

export default Events;