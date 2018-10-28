import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import styles from './styles';
import logo from '../../images/placeholder1.png';
import { Link } from 'react-router-dom';

const ProfileCard = ({ classes, data }) => {
  return (
    <Card className={classes.card}>
      <CardContent>

        <div className={classes.profileUserInfoWrapper}>
          <Avatar
            src={logo}
            alt="user's avatar"
            className={classes.avatar}
            to="/profile/1"
            component={Link}
          />
          <Typography className={classes.title} component="h2">
            {data.user.fullname}
          </Typography>
        </div>

        <div className={classes.profileMetaData}>
          <Typography variant="display1">
            <span>{data.user.items.length}</span>
            Shared Items
            <span>{data.user.borrowed.length}</span>
            Borrowed Items 
          </Typography>
        </div>

        <Typography variant="display1" >
          Bio: <span>{data.user.bio}</span>
        </Typography>

      </CardContent>
    </Card>
  );

};

export default withStyles(styles)(ProfileCard);
