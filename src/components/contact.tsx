import * as React from 'react';
import { useState } from 'react';
import MapGL from 'react-map-gl';

const Home: React.FC = () => {

    //settings for mapgl, default generic raleigh zoomed out.
    const [viewport, setViewport] = useState({
        latitude: 48.7425,
        longitude: 44.536944,
        zoom: 15,
        bearing: 0,
        pitch: 0
    });

    //clears inputs on submit button click, style button
    const ClearInputs = () =>{
        const allinputs = document.querySelectorAll('input')
        const submitbutton:HTMLElement = document.querySelector('#submit-btn')

        for (let i = 0; i < allinputs.length; i++){
            if (allinputs[i].value !== ''){
                submitbutton.style.backgroundColor = "green"; 
            }
            allinputs[i].value='';
        }
    }

    return(

    <div className='contact-us-container'>
        <div className='contact-us-div'>

            <h1>Contact Us</h1>

            <form>
                <div id='name'>
                    <label>Name:</label>
                    <input type="text" id="fname" name="fname"></input>
                </div>

                <div id='phone'>
                    <label>Phone</label>
                    <input type="tel" id="lname" name="lname"></input>
                </div>

                <div id='email'>
                    <label>Email:</label>
                    <input type="email" id="lname" name="lname"></input>
                </div>

                <div id='message'>
                    <label>Message</label>
                    <input type="text" id="lname" name="lname"></input>
                </div>
            </form>

            <button onClick={ClearInputs} id='submit-btn'>
                Submit
            </button>

        </div>

        <div className="mapbox-contact">

            <MapGL className='mapGLL'
            {...viewport}
            width="60vw"
            height="40vh"
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={setViewport}
            mapboxApiAccessToken={"pk.eyJ1IjoiY2xlbWVudHNhdXZhZ2UiLCJhIjoiY2twaTRxdGZwMDA2ajJ1bGpvOTJxbHI1diJ9.htkStpTFLbJNqB_EBouPRw"}/>

            <img loading='lazy' src='./././img/tikipole.gif'/>
        </div>

    </div>
    )
}

export default Home;