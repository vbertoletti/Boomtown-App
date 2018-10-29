import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import styles from './styles';
import CardForm from '../../components/CardForm/CardForm';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

const Profile = ({ classes, data, viewerId }) => {
  const viewerItems = data.user.items.filter(item => {
    return viewerId === item.itemowner.id;
  });

  return (
    <div className={classes.profilePageWrapper}>
      <ProfileCard data={data} />
      <div className={classes.cardForm}>
        <Typography variant="display1" className={classes.headline}>
          {data.user.items.length > 0 && <h3>Shared Items</h3>}
        </Typography>
        <Grid container>
          {viewerItems &&
            viewerItems.map(item => {
              return (
                <Grid
                  item
                  key={item.id}
                  xs={12}
                  md={6}
                  lg={4}
                  className={classes.itemCard}
                >
                  <CardForm item={item} />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </div>
  );
};

export default withStyles(styles)(Profile);
