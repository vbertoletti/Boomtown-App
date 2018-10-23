import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import ShareItemForm from '../../components/ShareItemForm';
import CardForm from '../../components/CardForm/CardForm';

import styles from './styles';

const Share = ({ classes, tags }) => {
  return (
    <div className={classes.Share}>
      <div className={classes.Card}>
        <CardForm />
      </div>
      <div className={classes.Form}>
        <ShareItemForm tags={tags} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Share);
