import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Index';
import Article from './containers/Article';
// import NotFound from './containers/NotFound';
// import Loading from './components/Loading';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-125555208-1');
ReactGA.pageview(window.location.pathname + window.location.search);

import './sass/style.scss';

const App = () => {
    console.log('%cInterest to build Website? Visit:\nhttps://rinaldydwii.com/','color: red; font-size: 32px;');
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/article/:canonical" component={Article} />
                {/* <Route component={NotFound} /> */}
            </Switch>
        </Router>
    );
};

export default App;