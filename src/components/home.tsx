import React from 'react';
import { NavLink } from 'react-router-dom';

import MainTiki from './img/maintiki.webp';
import Tiki1 from './img/tiki11.webp';
import Tiki2 from './img/tiki22.webp';
import Tiki3 from './img/tiki33.webp';
import Tiki4 from './img/tiki44.webp';
import Wood from './img/wood.webp';
import Mesh from './img/mesh.webp';
import Pineapple from './img/pineapple.mp4';
import TikiBG from './img/tikibg.webp';
import Shirt1 from './img/shirt1.webp';
import Shirt2 from './img/shirt2.webp';
import Shirt3 from './img/shirt3.webp';

const Home: React.FC = () => {
    
  //scroll to top of page on clicking a nav link
  const TopOfPage: () => void = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="contact-container">
        <div className="parallax" style={{ backgroundImage: `url(${Wood})` }}>
          <div
            className="main-landing"
            style={{ backgroundImage: `url(${MainTiki})` }}
          >
            <div></div>
            <h1>Welcome to Twisted Tiki!</h1>
            <h2>a Polynesian-inspired Bar & Grille</h2>
            <div></div>
          </div>
        </div>

        <div className="tikis" style={{ backgroundImage: `url(${Mesh})` }}>
          <div id="tiki-1" className="left ALLTIKIS">
            <img loading="lazy" src={Tiki1} alt="tiki-totem" />
            <div className="tiki-layer">
              <div></div>
              <h2>Ke aloha</h2>
              <br />
              <h3>Cheers</h3>
              <div></div>
            </div>
          </div>

          <div id="tiki-2" className="right ALLTIKIS ">
            <img loading="lazy" src={Tiki2} alt="tiki-totem" />
            <div className="tiki-layer">
              <div></div>
              <h2>Aloha</h2>
              <br />
              <h3>Hello or Goodbye</h3>
              <div></div>
            </div>
          </div>

          <div id="tiki-3" className="left ALLTIKIS">
            <img loading="lazy" src={Tiki3} alt="tiki-totem" />
            <div className="tiki-layer">
              <div></div>
              <h2>I leʻaleʻa kāu</h2>
              <br />
              <h3>Have Fun</h3>
              <div></div>
            </div>
          </div>

          <div id="tiki-4" className="right ALLTIKIS ">
            <img loading="lazy" src={Tiki4} alt="tiki-totem" />
            <div className="tiki-layer">
              <div></div>
              <h2>E hele kāua</h2>
              <br />
              <h3>Let's Party</h3>
              <div></div>
            </div>
          </div>
        </div>

        <div
          className="parallax2"
          style={{ backgroundImage: `url(${TikiBG})` }}
        >
          <div className="hours-container">
            <div className="hours">
              <h1>Hours</h1>
              <ul>
                <li>Mon - Thurs: 11:30am - 11pm-ish</li>
                <li>Fri Sat: 11:30am - midnight-ish</li>
                <li>Sunday: 11am - 11pm-ish</li>
                <li>Brunch served 11am</li>
              </ul>
            </div>
            <div className="happy-hour">
              <h1>Happy Hour</h1>
              <div></div>
              <h4 className="happy-hour-h4">Everyday Day All Day!</h4>
              <div></div>
              <ul className="happy-hour-ul">
                <li>$13 Domestic Beer Buckets</li>
                <li>$4 Fireball Shots </li>
                <li>$5 House Wines</li>
                <li>$5 Captain Morgan, Bacardi, Smirnoff</li>
                <li>
                  $15 keep the mug with a drink of choice, take a piece of
                  Hawaii home with you!{' '}
                </li>
              </ul>
              <div></div>
            </div>
          </div>
        </div>

        <div className="come-on-in">
          <div className="come-on-in-left">
            <video className="pineapple-mp4" autoPlay loop>
              <source src={Pineapple} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="come-on-in-right">
            <div></div>
            <div></div>
            <h1 className="first-h1">...Come On In!</h1>
            <div></div>
            <h1 className="second-h1">Tropical Vibes Inside</h1>
            <div></div>
            <p>
              Get ready to experience the tropical vibe at Twisted Tiki. Our
              Polynesian-inspired cocktails along with our eclectic tiki décor
              are your ticket to paradise!
              <br />
              <br />
              What's a tropical tiki bar without some music? Expect to find the
              area's best bands and musicians here at Twisted Tiki along with
              other fun events like Art Night, Paint Night, Trivia Night and
              more!
              <br />
              <br />
              Every day is a day in paradise at The Twisted Tiki. Aloha!
            </p>
            <div></div>
            <NavLink activeClassName="active" to="/events" onClick={TopOfPage}>
              <button id="button1">See What's Happening @ Twisted Tiki!</button>
            </NavLink>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="pineapplebg-parallax">
          <div className="pineapplebg-bluebg">
            <h1>
              Get the <span id="S1">S</span>
              <span id="S2">w</span>
              <span id="S3">a</span>
              <span id="S4">g</span>
            </h1>
            <div className="pineapplebg-images">
              <div></div>
              <img alt="twisted tiki merch" loading="lazy" src={Shirt1} />
              <img alt="twisted tiki merch" loading="lazy" src={Shirt2} />
              <img alt="twisted tiki merch" loading="lazy" src={Shirt3} />
              <div></div>
            </div>
            <p>
              Get Twisted with our Twisted Tiki merch! Women's Tees, Men's Tees,
              Tumblers, Koozies and Stickers available now!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
