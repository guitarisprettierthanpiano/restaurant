import React from 'react';

import Mural from './img/mural.webp';
import FlowerTexture from './img/flowertexture.webp';
import Trivia from './img/trivia.webp';
import Art from './img/art.webp';
import Music from './img/music.webp';

const Events: React.FC = () => {
  return (
    <div className="events-container">
      <div
        className="events-parallax"
        style={{ backgroundImage: `url(${Mural})` }}
      >
        <div className="upcoming-events">
          <h2>Events & Entertainment</h2>

          <h5>Music Times</h5>
          <p>
            Fri & Sat 7pm to 11pm, Sunday 3pm to 7pm. Local musicians every
            other Tuesday 5pm to 9pm. (Unless otherwise specified below).
          </p>

          <h4>May</h4>
          <div className="left-events">
            <p>1 - Sunday Market</p>
            <p>2 - Trivia Night 7pm / TB Lightning vs. Maple Leafs </p>
            <p>3 - Kevin Toon 5pm - 9pm</p>
            <p>5 - Cinco de Mayo Party! </p>
            <p>7 - Dusty Roads 7pm - 11pm</p>
            <p>8 - Mother's Day Specials</p>
            <p>9 - Trivia Night 7pm</p>
            <p>11 - Paint Nite 6:30pm</p>
            <p>12 - Game Show Night</p>
            <p>13 - Jahfari (Reggae) 7pm - 11pm</p>
          </div>
          <div className="right-events">
            <p>14 - John Kyle Rhode 7pm - 11pm</p>
            <p>16 - Trivia Night 7pm</p>
            <p>17 - Kevin Toon 5pm - 9pm</p>
            <p>20 - Bandingo! 7pm</p>
            <p>21 - 80's Costume Party w/ DJ 7pm - 11pm</p>
            <p>23 - Trivia Night 7pm</p>
            <p>26 - Paint Nite 6:30pm</p>
            <p>27 - John Kyle Rhode 7pm - 11pm</p>
            <p>28 - Horses Wild 7pm - 11pm</p>
            <p>29 - I-Ruption (Reggae) 5pm - 9pm</p>
            <p>30 - Trivia Night 7pm</p>
          </div>

          <h3>Happy Hour 7 Days A Week!</h3>
          <h6>Every Day All Day!</h6>
          <div className="events-happy-list">
            <p>$13 Domestic Beer Buckets</p>
            <p>$4 Fireball Shots</p>
            <p>$5 House Wines</p>
            <p>$5 Captain Morgan, Bacardi & Smirnoff</p>
          </div>
        </div>
      </div>

      <div
        className="events-bottom"
        style={{ backgroundImage: `url(${FlowerTexture})` }}
      >
        <div className="trivia-night">
          <img loading="lazy" id="trivia-img" src={Trivia}></img>
          <h2>Trivia Night</h2>
          <h4>Mondays 6:30 p.m.</h4>
          <p>Win bar tabs! Free to play.</p>
        </div>

        <div className="guest-musician">
          <img loading="lazy" src={Music}></img>
          <h2>Local Musicians</h2>
          <h4>Every Other Tuesday 5 p.m. - 9 p.m.</h4>
          <p>
            Chill out with us at Twisted Tiki every other Tuesday night with the
            music of the area!
          </p>
        </div>

        <div className="art-night">
          <img loading="lazy" src={Art}></img>
          <h2 className="animate-h2">Art Night</h2>
          <h4>Monthly - check the schedule for times</h4>
          <p>
            Enjoy some great music while you browse and shop with some great
            local artisans!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
