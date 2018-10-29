import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { LOGOUT_MUTATION, VIEWER_QUERY } from '../../apollo/queries';
import { graphql, compose } from 'react-apollo';
import { ViewerContext } from '../../context/ViewerProvider';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { classes, logoutMutation } = this.props;

    return (
      <div>
        <IconButton onClick={this.handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="dropdown"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
        >
          <ViewerContext.Consumer>
            {({ viewer }) => (
              <Link to={`/profile/${viewer.id}`}>
                <MenuItem key="Your Profile" onClick={this.handleClose}>
                  <FingerprintIcon className={classes.fingerIcon} />
                  Your Profile
                </MenuItem>
              </Link>
            )}
          </ViewerContext.Consumer>

          <Link to="/welcome">
            <MenuItem onBlur={this.handleClose} onClick={logoutMutation}>
              <PowerSettingsNewIcon className={classes.fingerIcon} />
              Sign Out
            </MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
}
const refetchQueries = [
  {
    query: VIEWER_QUERY
  }
];
export default compose(
  graphql(LOGOUT_MUTATION, {
    name: 'logoutMutation',
    options: {
      refetchQueries
    }
  }),
  withStyles(styles)
)(DropDown);
