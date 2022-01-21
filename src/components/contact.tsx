import * as React from 'react';
import { useState } from 'react';
import MapGL from 'react-map-gl';

const Contact: React.FC = () => {

    const [viewport, setViewport] = useState({
        latitude: 48.7425,
        longitude: 44.536944,
        zoom: 15,
        bearing: 0,
        pitch: 0
      });

    return (
    <div className='contact-container'>

        <div className="parallax">
            <div className='main-landing'>
                <div></div>
                <h1>Welcome to Twisted Tiki!</h1> 
                <h2>a Polynesian-inspired Bar & Grille</h2>
                <div></div>
            </div>
        </div>

        <div className='tikis'>
            <img src='../img/tiki1.webp'/>
            <img src='../img/tiki2.webp'/>
            <img src='../img/tiki3.webp'/>
            <img src='../img/tiki4.webp'/>
        </div>

        <div className='parallax2'>
            <div className='hours-container'>
                <div className='hours'>
                    <h1>Hours</h1>
                    <ul>
                        <li>Mon - Thurs:  11:30am - 11pm-ish</li>
                        <li>Fri Sat:  11:30am - midnight-ish</li>
                        <li>Sunday:  11am - 11pm-ish</li>
                        <li>Brunch served 11am</li>
                    </ul>
                </div>
                <div className='happy-hour'>
                    <h1>Happy Hour</h1>
                    <div></div>
                    <h4 className='happy-hour-h4'>Everyday Day All Day!</h4>
                    <div></div>
                    <ul className='happy-hour-ul'>
                        <li>$13 Domestic Beer Buckets</li>
                        <li>$4 Fireball Shots </li>
                        <li>$5 House Wines</li>
                        <li>$5 Captain Morgan, Bacardi, Smirnoff</li>
                        <li>$15 keep the mug with a drink of choice, take a piece of Hawaii home with you! </li>
                    </ul>
                    <div></div>
                </div>
            </div>
        </div>

        <div className='come-on-in'>
            <div className='come-on-in-left'>
                <img src='../img/pineapple.gif'></img>
            </div>
            <div className='come-on-in-right'>
                <div></div>
                <h1 className='first-h1'>...Come On In!</h1>
                <div></div>
                <h1 className='second-h1'>Tropical Vibes Inside</h1>
                <div></div>
                <p>Get ready to experience the tropical vibe at Twisted Tiki. Our Polynesian-inspired cocktails along with our eclectic tiki décor are your ticket to paradise!<br /><br />

                What's a tropical tiki bar without some music? Expect to find the area's best bands and musicians here at Twisted Tiki along with other fun events like Art Night, Paint Night, Trivia Night and more!<br /><br />

                Every day is a day in paradise at The Twisted Tiki. Aloha!</p>
                <div></div>
                <button>See What's Happening @ Twisted Tiki!</button>
                <div></div>
            </div>
        </div>

        <div className="parallax3">
            <MapGL className='mapGL'
            {...viewport}
            width="80vw"
            height="80vh"
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={setViewport}
            mapboxApiAccessToken={"pk.eyJ1IjoiY2xlbWVudHNhdXZhZ2UiLCJhIjoiY2twaTRxdGZwMDA2ajJ1bGpvOTJxbHI1diJ9.htkStpTFLbJNqB_EBouPRw"}/>
        </div>

    </div>
    )
}

export default Contact;