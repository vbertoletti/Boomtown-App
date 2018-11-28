import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import ShareItemForm from '../../components/ShareItemForm';
import styles from './styles';
import ShareItemPreview from '../../components/ShareItemPreview/'

const Share = ({ classes, tags }) => {
  return (
    <div className={classes.Share}>
      <div className={classes.Card}>
        <ShareItemPreview />
      </div>
      <div className={classes.Form}>
        <ShareItemForm tags={tags} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Share);
