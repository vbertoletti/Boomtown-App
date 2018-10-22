import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import styles from '../Share/styles';
import  ShareItemForm  from '../../components/ShareItemForm/ShareItemForm';
// import Grid from '@material-ui/core/Grid';
import CardForm from '../../components/CardForm/CardForm'

const Share = ({ classes  }) => {
  return (
    <div className={classes.sharepage}>
        <ShareItemForm />
        <CardForm />
    </div>
  );
};

export default withStyles(styles)(Share);
