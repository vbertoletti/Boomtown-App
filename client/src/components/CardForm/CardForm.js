import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import styles from './styles';
import Button from '@material-ui/core/Button';

const CardForm = ({ classes, item }) => {
  console.log(item);
    return (
      <Card className={classes.card}>
        <CardMedia
          component="img"
          className={classes.media}
          src = {item.imageurl}
          title="Item's title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <div className={classes.cardUserInfoContainer}>
              <Avatar
                // src={logo}
                alt="user's avatar"
                className={classes.avatar}
              />
              <div className={classes.userInfoWrapper}>
                <p className={classes.user}>
                  { item.itemowner.fullname } <br />
                  <span>
                  { item.title }
                  </span>
                </p>
              </div>
            </div>
          </Typography>

          <Typography className={classes.itemNamePreview}>
            { item.title }
          </Typography>
          <Typography className={classes.itemTagsPreview}>
            { item.tags.map(tag => (<p>{tag.title}</p>) )}
          </Typography>
          <Typography className={classes.itemDescriptionPreview}>
          { item.description }
          </Typography>
          <Button className={classes.previewButton}
            id="sharesubmit"
            type="submit"
            variant="contained"
            >
            BORROW
          </Button>
        </CardContent>
      </Card>
    );
  }


CardForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardForm);

