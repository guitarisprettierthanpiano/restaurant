import * as React from 'react';
import { useState } from 'react';
import MapGL from 'react-map-gl';
import { NavLink } from 'react-router-dom';

const Contact: React.FC = () => {

    //scroll to top of page on click
    const TopOfPage = () => {
        window.scrollTo(0, 0)
    };


    //adding animation to tikis on scrolling
    const windowVH:number = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    window.onscroll = function(){reveal_tikis()}
    function reveal_tikis(){
        const allTikis = document.querySelectorAll('.ALLTIKIS')

        if (window.pageYOffset >= windowVH*0.1){
            for(let i = 0; i < allTikis.length; i++){
                allTikis[i].classList.add('wobble')
            }
        }
    }

    
    const [viewport, setViewport] = useState({
        latitude: 35.787743,
        longitude: -78.644257,
        zoom: 12,
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

            <div id='tiki-1' className='ALLTIKIS'>
                <img loading='lazy' src="./././img/tiki1.webp"/>
                <div className="tiki-layer">
                    <div></div>    
                    <h2>Ke aloha</h2>
                    <br/>
                    <h3>Cheers</h3>
                    <div></div> 
                </div>
            </div>

            <div id='tiki-2' className='ALLTIKIS'>
                <img loading='lazy' src="./././img/tiki2.webp"/>
                <div className="tiki-layer">
                    <div></div>    
                    <h2>Aloha</h2>
                    <br/>
                    <h3>Hello or Goodbye</h3>
                    <div></div> 
                </div>
            </div>

            <div id='tiki-3' className='ALLTIKIS'>
                <img loading='lazy' src="./././img/tiki3.webp"/>
                <div className="tiki-layer">
                    <div></div>    
                    <h2>I leʻaleʻa kāu</h2>
                    <br/>
                    <h3>Have Fun</h3>
                    <div></div> 
                </div>
            </div>

            <div id='tiki-4' className='ALLTIKIS'>
                <img loading='lazy' src="./././img/tiki4.webp"/>
                <div className="tiki-layer">
                    <div></div>    
                    <h2>E hele kāua</h2>
                    <br/>
                    <h3>Let's Party</h3>
                    <div></div> 
                </div>
            </div>
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
                <img loading='lazy' src='./././img/pineapple.gif'></img>
            </div>
            <div className='come-on-in-right'>
                <div></div>
                <div></div>
                <h1 className='first-h1'>...Come On In!</h1>
                <div></div>
                <h1 className='second-h1'>Tropical Vibes Inside</h1>
                <div></div>
                <p>Get ready to experience the tropical vibe at Twisted Tiki. Our Polynesian-inspired cocktails along with our eclectic tiki décor are your ticket to paradise!<br /><br />

                What's a tropical tiki bar without some music? Expect to find the area's best bands and musicians here at Twisted Tiki along with other fun events like Art Night, Paint Night, Trivia Night and more!<br /><br />

                Every day is a day in paradise at The Twisted Tiki. Aloha!</p>
                <div></div>
                <NavLink 
                    activeClassName='active'
                    to='/events'
                    onClick={TopOfPage}>
                    <button>
                        See What's Happening @ Twisted Tiki!
                    </button>
                </NavLink>
                <div></div>
                <div></div>
            </div>
        </div>

        <div className="mapbox-parallax">
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