import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ShareItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: 'Add Tag',
    };
  }

  submitTheForm(e, form) {
    console.log('submitting!', form.getState().values);
    //fire mutation with form values
    !form.valid && form.reset();
  }

  render() {
    const { classes, tags } = this.props;
    return (
      <div className={this.props.classes.root}>
        <Typography component="h1" variant="h1" className={classes.heading}>
          Share. Borrow.<br></br> Prosper.
        </Typography>
        <Form
          onSubmit={(e, form) => this.submitTheForm(e, form)}
          render={({ handleSubmit }) => (
            <form onSubmit={e => handleSubmit(e)}>
              <fieldset className={classes.form}>
                <Button className={classes.shareImage}
                  id="submit"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  SELECT IMAGE
                </Button>
                <label htmlFor="item-name">
                  <Field
                    name="item name"
                    render={({ input, meta }) => (
                      <TextField
                        className={classes.itemName}
                        name="itemName"
                        type="text"
                        placeholder="Name your item"
                        {...input}
                      />
                    )}
                  />
                </label>
                <label htmlFor="item-description">
                  <Field
                    name="item-description"
                    render={({ input, meta }) => (
                      <TextField
                        className={classes.itemDescription}
                        name="itemDescription"
                        type="text"
                        placeholder="Describe your item"
                        {...input}
                      />
                    )}
                  />
                </label>
                <Field
                  name="addTag"
                  render={({ input, meta }) => (
                    <Select

                      inputProps={{
                        name: 'tags',
                        id: 'add-tag'
                      }}
                    >
                      {tags.map(tag => (
                        <MenuItem key={tag.id} value={tag.title}>
                          {tag.title}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </fieldset>
              <fieldset className={classes.shareFieldset}>
                <Button className={classes.shareButton}
                  id="submit"
                  type="submit"
                  variant="contained"
                >
                  SHARE
                </Button>
              </fieldset>
            </form>
          )}
        />
      </div>
    );
  }
}

export default withStyles(styles)(ShareItemForm);
