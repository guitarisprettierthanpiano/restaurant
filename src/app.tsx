import * as React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';

import Home from './components/home'
import Banner from './components/banner'
import Nav from './components/nav'
import Menu from './components/menu'
import AboutUs from './components/aboutus'
import Contact from './components/contact'
import Footer from './components/footer'

const App: React.FC = () => {
   
    return(
    <>
        <Banner/>

        <HashRouter>
            <Nav />
            
            <Switch>
                <Route exact path='/'
                component={Home}/>

                <Route path='/menu'
                component={Menu}/>

                <Route path='/aboutus'
                component={AboutUs}/>

                <Route path='/contact'
                component={Contact}/>
            </Switch>

            <Footer />
        </HashRouter>
    </> 
    )

}

export default App;