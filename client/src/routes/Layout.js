import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Items from '../pages/Items';
import Profile from '../pages/Profile';
import Share from '../pages/Share';
import Home from '../pages/Home';

export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here */}

    <Switch>
        <Route exact path="/welcome" component = {Home} />
        <Route exact path="/items" component = {Items} />
        <Route exact path="/profile" component = {Profile} />
        <Route exact path="/profile/:userid" component = {Profile} />
        <Route exact path="/share" component = {Share} />
        <Redirect to="/welcome" />
        <Route path="*" component = {Items} />
    </Switch>
  </Fragment>
);

