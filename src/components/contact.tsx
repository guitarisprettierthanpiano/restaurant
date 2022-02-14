import * as React from 'react';
import { useState } from 'react';
import MapGL from 'react-map-gl';

const Contact: React.FC = () => {

    //settings for mapgl, default generic raleigh zoomed out. mapStyle is from https://docs.mapbox.com/api/maps/styles/#list-styles 
    const [viewport, setViewport] = useState({
        latitude: 35.787743,
        longitude: -78.644257,
        zoom: 12,
        bearing: 0,
        pitch: 0,
        height: `50vh`,
        width: `50vw`,
        mapStyle: `mapbox://styles/mapbox/outdoors-v11`,
        mapboxApiAccessToken: `pk.eyJ1IjoiY2xlbWVudHNhdXZhZ2UiLCJhIjoiY2twaTRxdGZwMDA2ajJ1bGpvOTJxbHI1diJ9.htkStpTFLbJNqB_EBouPRw`, 
        className: `Map-GL`
    });

    //clears inputs on submit button click, style button green or transparent
    const ClearInputs = () =>{
        const allinputs = document.querySelectorAll('input')
        const submitbutton:HTMLElement = document.querySelector('#submit-btn')

        submitbutton.style.backgroundColor = "rgba(0, 0, 0, 0)"

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

        <div className="mapbox-parallax">

            <MapGL className='mapGL'
            {...viewport}/>
        </div>

    </div>
    )
}

export default Contact;