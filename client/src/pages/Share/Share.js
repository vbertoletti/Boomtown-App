import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import styles from './styles';
import { ShareItemForm } from '../../components/ShareItemForm/ShareItemForm';

const Share = ({ classes  }) => {
  return (
    <div>
      <h1>Share. Borrow. Prosper.</h1>
      {/* <ShareItemForm /> */}
    </div>
  ) 
};

export default withStyles(styles)(Share);
