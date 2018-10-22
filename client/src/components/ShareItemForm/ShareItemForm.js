import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import validate from './helpers/validation';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

class ShareItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitTheForm(form) {
    console.log('submitting!', form.getState().values);
    // Fire mutation with form values
    !form.invalid && form.reset();
  }

  render() {
    return (
      <div className="ShareItemForm">
  
          <Grid item xs={12}>
            <Typography variant="display1" className={this.props.classes.headline}>
              Share. Borrow. Prosper.
            </Typography>
          </Grid>

        <Form
          validate={values => validate(values)}
          onSubmit={(e, form) => this.submitTheForm(form)}
          render={({ handleSubmit, invalid, pristine }) => (
            <form onSubmit={e => handleSubmit(e)}>
              <FormControl fullWidth className={this.props.classes.formControl}>
                <fieldset className={this.props.classes.fieldset}>
                <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={this.props.classes.button}
                    >
                      Select an Image
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                  <Field
                    name="ItemName"
                    render={({ input, meta }) => (
                      <Input
                        name="ItemName"
                        type="text"
                        placeholder="Name your Item"
                        {...input}
                        className={this.props.classes.itemNameInput}
                      />
                    )}
                  />
                  </Grid>
                  <Grid item xs={12}>
                  <Field
                    name="Description"
                    render={({ input, meta }) => (
                      <Input
                        name="Description"
                        type="text"
                        placeholder="Description"
                        {...input}
                        className={this.props.classes.descriptionInput}
                      />
                    )}
                  />
                  </Grid>
                  <Grid item xs={12}>
                  <Field
                    name="Tags"
                    render={({ input, meta }) => (
                      <Input
                        name="Tags"
                        type="text"
                        placeholder="Tag"
                        {...input}
                        className={this.props.classes.tagInput}
                      />
                    )}
                  />
                  </Grid>
                </fieldset>
              </FormControl>
              <FormControl fullWidth className={this.props.classes.formControl}>
                <fieldset style={{ border: 'none' }}>
                  <Button
                    id="submit"
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={pristine || invalid}
                  >
                    SHARE
                  </Button>
                </fieldset>
              </FormControl>
            </form>
          )}
        
        />
        
        
      </div>
    );
  }
}

export default withStyles(styles)(ShareItemForm);
