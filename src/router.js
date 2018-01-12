import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home'
import Search from './components/Search'
import Profile from './components/Profile'




export default (
    <Switch>
        <Route exact path="/(access_token.*)?" component={ Login }/>
        <Route path="/home" component={ Home }/>
        <Route path="/search" component={ Search }/>
        <Route path="/profile" component={ Profile }/>
    </Switch>
)