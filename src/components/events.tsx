import * as React from 'react';

const Events: React.FC = () => {

    return (
    <div className='events-container'>

        <div className='events-parallax'>
            <div className='upcoming-events'>
                <h2>Events & Entertainment</h2>

                <h5>Music Times</h5>
                <p>Fri & Sat 7pm to 11pm, Sunday 3pm to 7pm.  Local musicians every other Tuesday 5pm to 9pm. (Unless otherwise specified below).</p>

                <h4>January</h4>
                <div className='left-events'>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>2 - Corey Ave. Sunday Market / Bucs. vs. Jets 1pm</p>
                        <p>3 - Trivia 7pm & Monday Night Football</p>
                        <p>4 - Kevin Toon 5pm - 9pm</p>
                        <p>6 - Game Show Night 7pm</p>
                        <p>7 - The Torpedoes 7pm - 11pm</p>
                        <p>8 - Corey Ave. Craft Show / John Kyle Rhode 7pm - 11pm</p>
                        <p>9 - Corey Ave. Craft Show / Bucs. vs. Panthers 1pm</p>
                        <p>10 - Trivia 7pm</p>
                        <p>11 - Paint Night 6:30pm</p>
                        <p>14 - tba</p>
                </div>
                <div className='right-events'>
                        <p>15 - Pete & Dean</p>
                        <p>16 - Corey Ave. Sunday Market / Football</p>
                        <p>17 - Trivia **6pm start</p>
                        <p>21 - Charles Parker 7pm - 11pm</p>
                        <p>22 - Football - Wildcard</p>
                        <p>23 - Football - Wildcard</p>
                        <p>24 - Trivia 7pm</p>
                        <p>25 - Kevin Toon 5pm - 9pm</p>
                        <p>26 - Paint Night 6:30pm</p>
                        <p>28 - Jason Alan 7pm - 11pm</p>
                        <p>29 - Doug South 7pm - 11pm</p>
                        <p>30 - tba</p>
                        <p>31 - Trivia 7pm</p>
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

        <div className='events-bottom'>
            <div className='trivia-night'>
                <img loading='lazy' id='trivia-img' src='./././img/trivia.png'></img>
                <h2>Trivia Night</h2>
                <h4>Mondays 6:30 p.m.</h4>
                <p>Win bar tabs! Free to play.</p> 
            </div> 

            <div className='guest-musician'>
                <img loading='lazy' src='./././img/music.png'></img>
                <h2>Local Musicians</h2>
                <h4>Every Other Tuesday 5 p.m. - 9 p.m.</h4>
                <p>Chill out with us at Twisted Tiki every other Tuesday night with the music of the area!</p>
            </div>

            <div className='art-night'>
                <img loading='lazy' src='./././img/art.png'></img>
                <h2 className='animate-h2'>Art Night</h2>
                <h4>Monthly - check the schedule for times</h4>
                <p>Enjoy some great music while you browse and shop with some great local artisans!</p>
            </div>
        </div>
    </div>
    )
}

export default Events;