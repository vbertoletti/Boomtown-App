import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import styles from './styles';
import { Link } from 'react-router-dom';
import BoomtownLogo from './../../images/boomtown.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


class NavBar extends Component {
  constructor(props) {
    super(props);
 
  }
    render() {
      return (
        this.props.location.pathname !== "/welcome" && (
          <div>
            <AppBar position="static">
              <Toolbar>
                <Link to="/items">
                  <img
                    src={BoomtownLogo}
                    alt="Company's Logo"
                  />
                </Link>
                <div>
                <Link to="/share">
                  SHARE SOMETHING
                </Link>
                </div>
              </Toolbar>
            </AppBar>
          </div>
               
        )
        
      )
    
  }
}
  

export default withStyles(styles)(withRouter(NavBar));