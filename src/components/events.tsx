import * as React from 'react';

const Events: React.FC = () => {

    return (
    <div className='events-container'>

        <div className='events-parallax' style={{backgroundImage: 'url(../img/mural.webp)'}}>
            <div className='upcoming-events'>
                <h2>Events & Entertainment</h2>

                <h5>Music Times</h5>
                <p>Fri & Sat 7pm to 11pm, Sunday 3pm to 7pm.  Local musicians every other Tuesday 5pm to 9pm. (Unless otherwise specified below).</p>

                <h4>February</h4>
                <div className='left-events'>
                        <p>1 - Game Show Night 7pm</p>
                        <p>2 - Trivia 7pm</p>
                        <p>4 - Jason Alan 7pm - 11pm</p>
                        <p>5 - tba</p>
                        <p>6 - Corey Ave. Market / One Kin Roof Fundraiser 2pm - 6pm</p>
                        <p>7 - Trivia 7pm</p>
                        <p>8 - Kevin Toon 5pm - pm</p>
                        <p>9 - Paint Night 6:30pm</p>
                        <p>11 - HighLife Band 7pm - 11pm</p>
                        <p>12 - Pete & Dean 3pm - 7pm</p>
                        <p>13 - Super Bowl 6pm</p>
                </div>
                <div className='right-events'>
                        <p>14 - Trivia 7pm</p>
                        <p>18 - tba</p>
                        <p>19 - HorsesWild Band 3pm - 7pm - Guest Bartenders!</p>
                        <p>20 - tba</p>
                        <p>21 - Trivia 7pm</p>
                        <p>22 - Kevin Toon 5pm - 9pm</p>
                        <p>23 - Game Show Night 7pm</p>
                        <p>24 - Paint Nite 6:30pm</p>
                        <p>25 - tba</p>
                        <p>26 - tba</p>
                        <p>28 - Trivia 7pm</p>
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

        <div className='events-bottom' style={{backgroundImage: 'url(../img/flowertexture.webp)'}}>
            <div className='trivia-night'>
                <img loading='lazy' id='trivia-img' src='./././img/trivia.webp'></img>
                <h2>Trivia Night</h2>
                <h4>Mondays 6:30 p.m.</h4>
                <p>Win bar tabs! Free to play.</p> 
            </div> 

            <div className='guest-musician'>
                <img loading='lazy' src='./././img/music.webp'></img>
                <h2>Local Musicians</h2>
                <h4>Every Other Tuesday 5 p.m. - 9 p.m.</h4>
                <p>Chill out with us at Twisted Tiki every other Tuesday night with the music of the area!</p>
            </div>

            <div className='art-night'>
                <img loading='lazy' src='./././img/art.webp'></img>
                <h2 className='animate-h2'>Art Night</h2>
                <h4>Monthly - check the schedule for times</h4>
                <p>Enjoy some great music while you browse and shop with some great local artisans!</p>
            </div>
        </div>
    </div>
    )
}

export default Events;