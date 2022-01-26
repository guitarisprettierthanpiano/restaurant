import * as React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';

import Home from './components/home'
import Nav from './components/nav'
import Menu from './components/menu'
import Events from './components/events'
import Contact from './components/contact'
import Footer from './components/footer'

const App: React.FC = () => {
   
    return(
    <>

    <HashRouter>

        <Nav />
            <Switch>

            <Route exact path='/'
            component={Home}/>

            <Route path='/menu'
            component={Menu}/>

            <Route path='/events'
            component={Events}/>

            <Route path='/contact'
            component={Contact}/>
        </Switch>

        <Footer />
    </HashRouter>
    
    </> 
    )

}

export default App;