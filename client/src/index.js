import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from 'react-apollo';
// import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ViewerProvider } from './context/ViewerProvider';
// -------------------------------

import registerServiceWorker from './registerServiceWorker';
import theme from './theme';
import client from './apollo';
import store from './redux';

/**
 * @TODO: Initialize Apollo Client
 *
 *
 * Below in your <App />, wrap your pages in an <ApolloProvider /> component
 * and pass it `client` as the `client` prop value so they will
 * have access to data exposed by your GraphQL API.
 */

/**
 * @TODO: Add Routing
 *
 * Uncomment the following line when your routes are configured
 *
 * import Routes from './routes/index'
 *
 * Below in your <App />, nest your <Routes /> inside of <BrowserRouter />
 * component to enable routing in your client app.
 */

/**
 * @TODO: Initialize Redux Store
 *
 * Uncomment the following line when your Redux store is configured
 *
 *
 *
 * Below in your <App />, wrap a <ReduxProvider /> component around all
 * of the app's children, and pass it the imported `store` as the `store`
 * prop's value.
 */

/**
 * @TODO: Add the Viewer Context
 *
 *
 *
 * Below in your <App />, wrap the <ViewerProvider /> component around
 * the <BrowserRouter /> component so the router is aware of whether a
 * user is currently logged in and who that user is.
 */

// @TODO: Remove this import once you have your router working below
import Layout from './routes/Layout';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ViewerProvider>
        <ReduxProvider store={store}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <Layout />
            </Router>
          </MuiThemeProvider>
        </ReduxProvider>
      </ViewerProvider>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
