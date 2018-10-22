import { withStyles } from '@material-ui/core/styles';
import React from 'react';  
import styles from './styles';
import CardForm from '../../components/CardForm/CardForm';

const Items = ({ classes, data }) => {
  return (
    <div className={classes.cardwrapper}>
      {
        data.items.map(item => {
      
          return (
            <div className={classes.cardchild}>
              <CardForm key={item.id} item={item} />
            </div>
          ) 
        })
      }
    </div>
  );
};

export default withStyles(styles)(Items);
