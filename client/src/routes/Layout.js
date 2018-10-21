import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Items from '../pages/Items';
import Profile from '../pages/Profile';
import Share from '../pages/Share';
import Home from '../pages/Home';
import NavBar from '../components/NavBar'

export default () => (
  <Fragment>

    <NavBar /> 

    <Switch>
        <Route exact path="/welcome" component = {Home} />
        <Route exact path="/items" component = {Items} />
        <Route exact path="/profile/:userid" component = {Profile} />
        <Route exact path="/share" component = {Share} />
        {/* <Route component = {Items} /> */}
        <Redirect to="/welcome" />
        <Route path="*" component = {Items} />
    </Switch>
  </Fragment>
);

