import * as React from 'react';
import { useState } from 'react';
import MapGL from 'react-map-gl';

const Home: React.FC = () => {

    const [viewport, setViewport] = useState({
        latitude: 48.7425,
        longitude: 44.536944,
        zoom: 15,
        bearing: 0,
        pitch: 0
    });

    return(
    <div className='contact-us-container'>
        <div className='contact-us-div'>
            <h1>Contact Us</h1>

            <form>
                <label>Name:</label>
                <input type="text" id="fname" name="fname"></input>
                <label>Phone:</label>
                <input type="tel" id="lname" name="lname"></input>
                <label>Email:</label>
                <input type="email" id="lname" name="lname"></input>
                <label>Message</label>
                <input type="text" id="lname" name="lname"></input>
            </form>

            <button>Submit</button>
        </div>

        <div className="mapbox-contact">
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

export default Home;