import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import CardForm from '../../components/CardForm/CardForm';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

const Profile = ({ classes, data }) => {
  return (
    <div>

       <ProfileCard data={data} />

      <Typography variant="display1" className={classes.headline}>
          {data.user.items.length > 0 && <h3>Shared Items</h3>}
          {data.user.borrowed.length > 0 && <h3>Borrowed Items</h3>}
      </Typography>

        {data.user.items.map(item => {
          return <CardForm key={item.borrowerid} item={item} />;
        })}


    </div>
     
  );
};

export default withStyles(styles)(Profile);
