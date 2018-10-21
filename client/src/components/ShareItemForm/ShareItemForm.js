import React, { Component } from 'react';
// import { Form, Field } from 'react-final-form';
// import ItemsContainer from '../../pages/Items/ItemsContainer';
// import { withStyles } from '@material-ui/core/styles';


class ShareItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() { 
    return (  
      <form>
        <button>Select Image</button>
        <label>
          <input
            id="share-item-name"
            name="share-item-name"
            type="text"
            placeholder="Name your item"
          />
        </label>
        <label>
          <input
            id="share-item-description"
            name="share-item-name"
            type="text"
            placeholder="Describe your item"
          />
        </label>
        <label>
          <input type="checkbox" /> 
          Add some tags
        </label>
        <button>Share</button>
      </form>
    );
  }
}

export default ShareItemForm;
