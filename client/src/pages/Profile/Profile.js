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
          {data.user.items.length > 0 && <p>Shared Items</p>}
        </Typography>
        <Grid container>
          {viewerItems &&
            viewerItems.map(item => {
              return (
                <div key={item.id} className={classes.profileItemCard}>
                  <CardForm item={item} />
                </div>
              );
            })}
        </Grid>
      </div>
    </div>
  );
};

export default withStyles(styles)(Profile);
