import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Items from '../pages/Items';
import Profile from '../pages/Profile';
import Share from '../pages/Share';
import Home from '../pages/Home';
import NavBar from '../components/NavBar';
import { ViewerContext } from '../context/ViewerProvider';

export default () => (
  <ViewerContext.Consumer>
    {({ loading, viewer, error }) => {
      if (loading) return 'Loading...';
      if (viewer) {
        return (
          <Switch>
            <Route exact path="/welcome" name="home" component={Home} />
            <Redirect from="*" to="/welcome" />
          </Switch>
        );
      }
      return (
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/welcome" name="home" component={Home} />
            <Route exact path="/items" component={Items} />
            <Route exact path="/share" component={Share} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/:userid" component={Profile} />
          </Switch>
        </Fragment>
      );
    }}
  </ViewerContext.Consumer>
);
