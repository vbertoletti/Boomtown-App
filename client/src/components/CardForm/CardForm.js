import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import styles from './styles';


const CardForm = ({ classes  }) => {

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image=""
          title="Item's title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <div className={classes.row}>
              <Avatar
                src="../../images/boomtown.svg"
                alt="Boomtown Logo"
                className={classes.avatar}
              />
              <div className={classes.userContainer}>
                <p className={classes.user}>
                  Vanessa <br />
                  <span>time posted</span>
                </p>
              </div>
            </div>
          </Typography>

          <Typography className={classes.userInput}>Name your item</Typography>
          <Typography className={classes.DescribeInput}>
            item description
          </Typography>
        </CardContent>
      </Card>
    );
  }


CardForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardForm);

