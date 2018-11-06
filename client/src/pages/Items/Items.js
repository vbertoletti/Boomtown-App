import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import styles from './styles';
import CardForm from '../../components/CardForm/CardForm';
import PropTypes from 'prop-types';

const Items = ({ classes, data }) => {

  return (
    <div className={classes.cardwrapper}>
      {data.items.map(item => {
        return (
          <div key={item.id} className={classes.cardchild}>
            <CardForm key={item.id} item={item} />
          </div>
        );
      })}
    </div>
  );
};

Items.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Items);
