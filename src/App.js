import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Index';
// import NotFound from './containers/NotFound';
// import Loading from './components/Loading';

// import ReactGA from 'react-ga';

import './sass/style.scss';

const App = () => {
    console.log('%cInterest to build Website? Visit:\nhttps://rinaldydwii.com/','color: red; font-size: 32px;');
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route component={NotFound} /> */}
            </Switch>
        </Router>
    );
};

export default App;