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
          <Typography className={classes.profileCardName} component="h2">
            {data.user.fullname}
          </Typography>
        </div>

        <div className={classes.profileMetaData}>
          <Typography variant="display1">
            <span className={classes.profileCardSpan}>
              {data.user.items.length}
            </span>
            <span className={classes.profileCarditems}>Shared Items</span>

            <span className={classes.profileCardSpan}>
              {data.user.borrowed.length}
            </span>
            <span className={classes.profileCarditems}>Borrowed Items</span>
          </Typography>
        </div>

        <Typography variant="display1" className={classes.profileCardBio}>
          Bio: {data.user.bio}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(ProfileCard);
