import * as React from 'react';

const Menu: React.FC = () => {

    return (
    <div className='menu-container'>
        
        <div className='menu-landing'>
            <div className='menu-left'>
                <img src='./././img/test.jpg'></img>
            </div>
            <div className='menu-right'>
                <div className='blank-landing'></div>
                <h1>Menu</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum necessitatibus qui tempore amet ducimus dolor aliquam magnam.</p>
                <button>Book A Table</button>
                <div className='blank-landing'></div>
            </div>
            <div className='menu-bottom'>
                <h1>BREAKFAST n LUNCH SERVED DAILY - OPEN 7AM TO 7PM</h1>
            </div>
        </div>


    </div>
    )
}

export default Menu;