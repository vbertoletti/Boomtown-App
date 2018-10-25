import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from './NavBar';

class NavBarContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  render() {
    return this.props.location.pathname !== '/welcome' && <NavBar />
    
  }
}

export default withRouter(NavBarContainer);