import React, { Fragment } from 'react';
import { Form, Field, FormSpy } from 'react-final-form';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import {
  UpdateNewItem,
  ResetNewItem,
  ResetNewItemImage
} from './../../redux/modules/shareItemPreview';
import { Checkbox, ListItemText } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import { graphql } from 'react-apollo';
import { ADD_ITEM_MUTATION } from '../../apollo/queries';
import {VIEWER_QUERY } from "../../apollo/queries";
import { compose } from 'redux';

class ShareItemForm extends React.Component {
  constructor() {
    super();
    this.fileInput = React.createRef();
    this.state = {
      fileSelected: '',
      done: false,
      selectedTags: []
    };
  }

  generateTagsText(tags, selected) {
    return tags
      .map(t => (selected.indexOf(t.id) > -1 ? t.title : false))
      .filter(e => e)
      .join(', ');
  }

  getBase64Url() {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = e => {
        resolve(
          `data:${this.state.fileSelected.type};base64, ${btoa(
            e.target.result
          )}`
        );
      };
      reader.readAsBinaryString(this.state.fileSelected);
    });
  }

  applyTags(tags) {
    return (
      tags &&
      tags
        .filter(t => this.state.selectedTags.indexOf(t.id) > -1)
        .map(t => ({ title: t.title, id: t.id }))
    );
  }

  dispatchUpdate(values, tags, updateNewItem) {
    if (!values.imageurl && this.state.fileSelected) {
      this.getBase64Url().then(imageurl => {
        updateNewItem({
          imageurl
        });
      });
    }
    updateNewItem({
      ...values,
      tags: this.applyTags(tags)
    });
  }

  handleSelectTag(event) {
    this.setState({ selectedTags: event.target.value });
  }

  handleSelectFile(event) {
    this.setState({ fileSelected: this.fileInput.current.files[0] });
  }

  saveItem(values, addItemMutation, tags) {
    console.log(values);
    const itemData = {
      title: values.title,
      description: values.description,
      tags: this.applyTags(tags)
    };

    addItemMutation({
      variables: {
        item: itemData
      }
    })

  }

  render() {
    const { classes, tags, updateNewItem, addItemMutation  } = this.props;
    return (
      <div className={this.props.classes.root}>
        <Typography component="h1" className={classes.heading}>
          Share. Borrow.<br /> Prosper.
        </Typography>
        <Form
          onSubmit={values => this.saveItem(values, addItemMutation, tags)}
          render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit}>
              <FormSpy
                subscription={{ values: true }}
                component={({ values }) => {
                  if (values) {
                    this.dispatchUpdate(values, tags, updateNewItem);
                  }
                  return '';
                }}
              />
              <fieldset className={classes.form}>
                <Field
                  name="imageurl"
                  render={({ input, meta }) => (
                    <React.Fragment>
                      {!this.state.fileSelected ? (
                        <Button
                          onClick={() => this.fileInput.current.click()}
                          className={classes.shareImage}
                        >
                          <Typography>Select Image</Typography>
                        </Button>
                      ) : (
                        <Button onClick={() => this.resetFileInput()}>
                          <Typography>Reset Image</Typography>
                        </Button>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        ref={this.fileInput}
                        hidden
                        onChange={event => this.handleSelectFile(event)}
                      />
                    </React.Fragment>
                  )}
                />

                <Field
                  name="title"
                  render={({ input, meta }) => (
                    <TextField
                      inputProps={{ ...input }}
                      label="Name your item"
                      className={classes.itemName}
                      multiple
                      rowsMax="4"
                    />
                  )}
                />

                <Field
                  name="description"
                  render={({ input, meta }) => (
                    <TextField
                      inputProps={{ ...input }}
                      label="Describe your item"
                      className={classes.itemDescription}
                      {...input}
                    />
                  )}
                />

                <Field
                  name="tags"
                  render={({ input, meta }) => (
                    <Fragment>
                      <InputLabel className={classes.shareItemFormTagsTitle}>
                        Add some tags
                      </InputLabel>
                      <Select
                        multiple
                        label="Add tags"
                        renderValue={selectedTags => {
                          return this.generateTagsText(tags, selectedTags);
                        }}
                        className={classes.tags}
                        value={this.state.selectedTags}
                        onChange={event => this.handleSelectTag(event)}
                      >
                        {tags.map(tag => (
                          <MenuItem key={tag.id} value={tag.id}>
                            <Checkbox
                              checked={
                                this.state.selectedTags.indexOf(tag.id) > -1
                              }
                            />

                            <ListItemText primary={tag.title} />
                          </MenuItem>
                        ))}
                      </Select>
                    </Fragment>
                  )}
                />
              </fieldset>
              <fieldset className={classes.shareFieldset}>
                <Button className={classes.shareButton} variant="contained" type="submit">
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

const mapDispatchToProps = dispatch => ({
  updateNewItem(item) {
    dispatch(UpdateNewItem(item));
  },
  resetNewItem() {
    dispatch(ResetNewItem());
  },
  resetNewItemImage() {
    dispatch(ResetNewItemImage());
  }
});
const refetchQueries = [
  {
    query: VIEWER_QUERY
  }
];
export default connect(
  null,
  mapDispatchToProps
)(
  compose(
    graphql(ADD_ITEM_MUTATION, {
      options: { refetchQueries },
      name: 'addItemMutation'
    }),
    withStyles(styles)
  )(ShareItemForm)
);
