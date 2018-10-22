import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
// import styles from "../DropDown/styles";


const options = [
    { option: 'Your Profile', path: "/profile/1" },
    { option: 'Sign Out', path: "/welcome" }
];

const ITEM_HEIGHT = 50;

class LongMenu extends React.Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(o => (
            <MenuItem key={o} selected={o === 'Pyxis'} onClick={this.handleClose}>
              <Link to={o.path}>
                {o.option}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default (LongMenu);