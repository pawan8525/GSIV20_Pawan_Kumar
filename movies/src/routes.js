import React, { Component } from 'react';
import { DefaultRoute, IndexRoute, Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

//componenets
import App from './components/App';
import MovieDetail from './components/MovieDetail';
const browserHistory = createHistory();

const createRoutes = () => (
    <Router   history={browserHistory}>
        <Route exact path="/" component={App}/>
        <Route  path="/Detail/:id" component={MovieDetail}/>
    </Router >
);
export default createRoutes;