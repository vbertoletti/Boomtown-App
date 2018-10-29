import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import styles from './styles';
import Gravatar from 'react-gravatar';

const ProfileCard = ({ classes, data }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.profileUserInfoWrapper}>
          <CardHeader
            avatar={
              <Gravatar className={classes.avatar} email={data.user.email} />
            }
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
