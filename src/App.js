import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Index';
import Article from './containers/Article';
import Tag from './containers/Tag';
import ArticleList from './containers/ArticleList';
import NotFound from './containers/NotFound';
// import Loading from './components/Loading';

import ReactGA from 'react-ga';
if (process.env.NODE_ENV == 'development') {
    ReactGA.initialize('UA-125555208-1');
}
else if (process.env.NODE_ENV == 'production') {
    ReactGA.initialize('UA-125555208-2');
}
ReactGA.pageview(window.location.pathname + window.location.search);

import './sass/style.scss';

const App = () => {
    console.log('%cInterest to build Website? Visit:\nhttps://rinaldydwii.com/','color: red; font-size: 32px;');
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/article" component= {ArticleList} />
                <Route exact path="/article/:canonical" component={Article} />
                <Route exact path="/tag/:id" component={Tag} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;