import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BoomtownLogo from './../../images/boomtown.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/AddCircle';
import DropDown from '../DropDown/DropDown';

const NavBar = props => {
  return (
    <div>
      <AppBar
        position="static"
        style={{
          display: 'flex',
          position: 'relative',
          height: '60px'
        }}
      >
        <Toolbar
          style={{
            margin: '10px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Link to="/items">
            <img
              src={BoomtownLogo}
              alt="Company's Logo"
              style={{
                height: '45px',
                width: 'auto',
                position: 'relative',
                bottom: '10px',
                right: '25px'
              }}
            />
          </Link>
          <div>
            <Link
              to="/share"
              style={{
                position: 'relative',
                bottom: '10px'
              }}
            >
              <Button to="/share">
                <Icon
                  style={{
                    margin: '10px'
                  }}
                />
                SHARE SOMETHING
              </Button>
              <Button>
                <DropDown />
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles()(withRouter(NavBar));
