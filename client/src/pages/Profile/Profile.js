import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import styles from './styles';
import CardForm from '../../components/CardForm/CardForm';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

const Profile = ({ classes, data }) => {
  return (
    <div className={classes.profilePageWrapper}>
      <ProfileCard data={data} />

      <Typography variant="display1" className={classes.headline}>
        {data.user.items.length > 0 && <h3>Shared Items</h3>}
      </Typography>

      <Grid container>
        {data.user.items.map(item => (
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
        ))}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Profile);
