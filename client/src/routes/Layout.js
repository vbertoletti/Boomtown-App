import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Items from '../pages/Items';
import Profile from '../pages/Profile';
import Share from '../pages/Share';
import Home from '../pages/Home';
import NavBar from '../components/NavBar';
import { ViewerContext } from '../context/ViewerProvider';

export default () => (
  <React.Fragment>
    <NavBar />
    <ViewerContext.Consumer>
      {({ viewer, loading }) => {
        if (viewer) {
          return (
            <Switch>
              <Route exact path="/welcome" component={Home} />
              <Route exact path="/items" component={Items} />
              <Route exact path="/profile/:userid" component={Profile} />
              <Route exact path="/share" component={Share} />
            </Switch>
          );
        } else {
          return (
            <Switch>
              <Route path="*" component={Items} />
              <Redirect to="/welcome" />
            </Switch>
          );
        }
      }}
    </ViewerContext.Consumer>
  </React.Fragment>
);
