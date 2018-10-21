import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import styles from './styles';
import { Link } from 'react-router-dom';
import BoomtownLogo from './../../images/boomtown.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/icons/AddCircle'


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
                  <Button to= '/share'>
                    <Icon style={{ margin: '10px' }} /> 
                      SHARE SOMETHING
                  </Button>
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