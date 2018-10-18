import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';

export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here */}
    <Switch>
      {/**
       *
       * Later, we'll add logic to send users to one set of routes if they're logged in,
       * or only view the /welcome page if they are not.
       */}
       
        <Route exact path="/welcome" component = {Home} />
        <Route exact path="/items" component = {Items} />
        <Route exact path="/profile" component = {Profile} />
        <Route exact path="/profile/:userid" component = {Profile} />
        <Route exact path="/share" component = {Share} />
   
       

        <Route path="*" component = {Items} />

    </Switch>
  </Fragment>
);
