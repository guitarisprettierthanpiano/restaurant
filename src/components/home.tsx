import * as React from 'react';
import { useState } from 'react';
import MapGL from 'react-map-gl';
import { NavLink } from 'react-router-dom';

const Contact: React.FC = () => {

    //scroll to top of page on clicking a nav link
    const TopOfPage = () => {
        window.scrollTo(0, 0)
    };


    //adding animation to tikis on scrolling 25% of page view height
    const windowVH:number = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    window.onscroll = function(){reveal_tikis()}
    function reveal_tikis(){
        const allTikis = document.querySelectorAll('.ALLTIKIS')

        if (window.pageYOffset >= windowVH*0.25){
            //i used this before i decided to make two different wobbles, giving the illusion they are bangings against eachother.
            // for(let i = 0; i < allTikis.length; i++){
            //     allTikis[i].classList.add('wobble')
            // }
            allTikis[0].classList.add('wobbleL')
            allTikis[1].classList.add('wobbleR')
            allTikis[2].classList.add('wobbleL')
            allTikis[3].classList.add('wobbleR')
        }
    }


    //raleigh nc coords, somewhat zoomed out
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
                    <button id='button1'>
                        See What's Happening @ Twisted Tiki!
                    </button>
                </NavLink>
                <div></div>
                <div></div>
            </div>
        </div>

        <div className="pineapplebg-parallax">
            <div className='pineapplebg-bluebg'>
                <h1>Get the <span id='S1'>S</span><span id='S2'>w</span><span id='S3'>a</span><span id='S4'>g</span></h1>
                <div className='pineapplebg-images'>
                    <div></div>
                    <img loading='lazy' src='./././img/shirt1.png'/>
                    <img loading='lazy' src='./././img/shirt2.png'/>
                    <img loading='lazy' src='./././img/shirt3.png'/>
                    <div></div>
                </div>
                <p>Get Twisted with our Twisted Tiki merch!
                Women's Tees, Men's Tees, Tumblers, Koozies and Stickers available now!</p>
            </div>
        </div>

    </div>
    )
}

export default Contact;