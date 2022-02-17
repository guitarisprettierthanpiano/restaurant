import * as React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';

import Nav from './components/nav'

const Home = React.lazy(() => import("./components/home"));
const Menu = React.lazy(() => import("./components/menu"));
const Events = React.lazy(() => import("./components/events"));
const Contact = React.lazy(() => import("./components/contact"));
const Footer = React.lazy(() => import("./components/footer"));

const App: React.FC = () => {
   
    return(
    <>
    <HashRouter>

        <Nav />

        <Switch>
            <React.Suspense fallback={<p className='loading'>Loading page...</p>}>
                <Route exact path='/'
                component={Home}/>

                <Route path='/menu'
                component={Menu}/>

                <Route path='/events'
                component={Events}/>

                <Route path='/contact'
                component={Contact}/>
            </React.Suspense>
        </Switch>

        <React.Suspense fallback={<p className='loading'>Loading footer...</p>}>
            <Footer />
        </React.Suspense>

    </HashRouter>
    </> 
    )

}

export default App;