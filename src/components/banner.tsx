import * as React from 'react';

const Banner: React.FC = () => {

    return (
        <>
        <div className='banner-container'>
            <div className='banner-subcontainer'>
                <span></span>
                <span id='banner-phone'>543-3432-3242</span>
                <span id='banner-email'>Schlepper@wee.com</span>
                <span></span>
            </div>
            <div className='banner-blank'>
            </div>
        </div>

        </>
    )
}

export default Banner;