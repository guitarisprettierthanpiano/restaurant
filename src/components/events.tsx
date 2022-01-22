import * as React from 'react';

const Events: React.FC = () => {

    return (
    <div className='events-container'>

        <div className='events-parallax'>
            <div className='upcoming-events'>
                <h2>Events & Entertainment</h2>

                <h5>Music Times</h5>
                <p>Fri & Sat 7pm to 11pm, Sunday 3pm to 7pm.  Kevin Toon every other Tuesday 5pm to 9pm. (Unless otherwise specified below).</p>

                <h4>January</h4>
                <div className='left-events'>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                </div>
                <div className='right-events'>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
                        <p>1 - Pink Street Duo - 7pm - 11pm</p>
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
                <img src='../img/test.jpg'></img>
                <h2>Trivia Night</h2>
                <h4>Mondays 6:30 p.m.</h4>
                <p>Win bar tabs! Free to play.</p>
            </div> 

            <div className='guest-musician'>
                <img src='../img/test.jpg'></img>
                <h2>BB King</h2>
                <h4>Every Other Tuesday 5 p.m. - 9 p.m.</h4>
                <p>Chill out with us at Twisted Tiki every other Tuesday night with the music of BB King!</p>
            </div>

            <div className='art-night'>
                <img src='../img/test.jpg'></img>
                <h2>Art Night</h2>
                <h4>Monthly - check the schedule for times</h4>
                <p>Enjoy some great music while you browse and shop with some great local artisans!</p>
            </div>
        </div>
    </div>
    )
}

export default Events;