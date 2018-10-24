import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import styles from './styles';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import CardForm from '../../components/CardForm/CardForm';

const Profile = ({ classes, data }) => {
  return (
    <div> 
      <ProfileCard />
        <p>Items Shared</p>
      <CardForm />
    </div>
  );
};


export default withStyles(styles)(Profile)
