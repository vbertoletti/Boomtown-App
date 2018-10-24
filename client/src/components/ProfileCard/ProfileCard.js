import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import styles from './styles';
import logo from '../../images/placeholder1.png';

const ProfileCard = ({ classes, data  }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.profileUserInfoWrapper}>    
          <Avatar
            src={logo}
            alt="user's avatar"
            className={classes.avatar}
          />
          <Typography className={classes.title}>
            Vanessa
          </Typography>
        </div>
        <div className={classes.profileMetaData}>   
          <Typography>
            items shared
          </Typography>

          <Typography component="p">
            items borrowed
          </Typography>

        </div>

        <Typography component="p">
        "No bio provided."
        </Typography>

      </CardContent>
    </Card>
  );
  
};

export default withStyles(styles)(ProfileCard);