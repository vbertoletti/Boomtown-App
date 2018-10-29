import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styles from './styles';
import moment from 'moment';
import {
  Button,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from '@material-ui/core';
import Gravatar from 'react-gravatar';
import { ViewerContext } from '../../context/ViewerProvider';

const CardForm = ({ classes, item }) => {
  return (
    <ViewerContext.Consumer>
      {({ loading, viewer, error }) => {
        return (
          <Card className={classes.card}>
            <CardMedia
              component="img"
              className={classes.media}
              image={item.imageurl}
              title="Item's picture"
            />
            <Link to={`/profile/${item.itemowner.id}`}>
              <CardHeader
                avatar={
                  <Gravatar
                    className={classes.avatar}
                    email={item.itemowner.email || viewer.email}
                  />
                }
                title={item.itemowner.fullname || viewer.fullname}
                subheader={moment(new Date(item.date)).fromNow()}
              />
            </Link>

            <CardContent className={classes.cardFormMeta}>
              <Typography
                variant="h5"
                component="h2"
                className={classes.cardFormTitle}
              >
                {item.title}
              </Typography>

              <Typography className={classes.cardFormTags}>
                {item.tags.map(tag => tag.title).join(', ')}
              </Typography>

              <Typography className={classes.cardFormDescription}>
                {item.description}
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                className={classes.cardFormButton}
                id="sharesubmit"
                type="submit"
                variant="contained"
              >
                BORROW
              </Button>
            </CardActions>
          </Card>
        );
      }}
    </ViewerContext.Consumer>
  );
};

CardForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardForm);
