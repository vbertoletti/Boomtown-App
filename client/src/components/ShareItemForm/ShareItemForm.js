import React, { Component } from 'react';
import { Form, Field, FormSpy } from 'react-final-form';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { UpdateNewItem, ResetNewItem, ResetNewItemImage } from './../../redux/modules/shareItemPreview';
import { Checkbox, ListItemText } from '@material-ui/core';
import Input from "@material-ui/core/Input";

class ShareItemForm extends React.Component {

  constructor() {
    super();
    this.fileInput = React.createRef()
    this.state = {
      fileSelected: '',
      done: false,
      selectedTags: [],

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
    this.setState({selectedTags: event.target.value})

  }

  handleSelectFile(event) {
    this.setState({fileSelected: this.fileInput.current.files[0]})

  }
  

  render() {
    const { classes, tags, updateNewItem } = this.props;
    return (
      
      <div className={this.props.classes.root}>
        <Typography component="h1" variant="h1" className={classes.heading}>
          Share. Borrow.<br></br> Prosper.
        </Typography>
        <Form
          onSubmit={(e, form) => this.submitTheForm(e, form)}
          render={({ handleSubmit, pristine, invalid }) => (
            <form>
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
                name='imageurl'
                render={({ input, meta }) => (
                  <React.Fragment>
                    {
                      !this.state.fileSelected ? (
                        <Button onClick={() => this.fileInput.current.click()}>
                          <Typography>
                            Select Image 
                          </Typography>
                        </Button>
                      ) : (
                        <Button onClick={() => this.resetFileInput()}>
                          <Typography>
                            Reset Image
                          </Typography>
                        </Button>
                      )
                    }
                  <input 
                    type='file'
                    accept='image/*'
                    ref={this.fileInput}
                    hidden
                    onChange={event => this.handleSelectFile(event)}

                  />
                  </React.Fragment>

                )}
                className={classes.shareImage}
                >
               
                </Field>


             
                  <Field
                    name="title"
                    render={({ input, meta }) => (
                      <TextField
                        inputProps = {{...input}}
                        label="name your item"
                        className={classes.itemName}
                        multiple
                        rowsMax="4"
                        placeholder="Name your item"
                      />
                    )}
                  />
                
               
                  <Field
                    name="description"
                    render={({ input, meta }) => (
                      <Input
                        inputProps = {{...input}}
                        className={classes.itemDescription}
                        type="text"
                        placeholder="Describe your item"
                        {...input}
                      />
                    )}
                  />
          
                <Field
                  name="tags"
                  render={({ input, meta }) => (
                    <Select
                      multiple
                      id="select-tags"
                      renderValue={(selectedTags) => {
                        return this.generateTagsText(tags, selectedTags)
                      }}
                      value={this.state.selectedTags}
                      label="Tag your items"
                      className={classes.lala}
                      onChange={event => this.handleSelectTag(event)}
                    >
                      
                     
                        {tags.map(tag => (
                          <MenuItem 
                             key={tag.id} 
                             value={tag.id}
                           >
                          <Checkbox checked={this.state.selectedTags.indexOf(tag.id) > -1} />
                          <ListItemText primary={tag.title} />

                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </fieldset>
              <fieldset className={classes.shareFieldset}>
                <Button className={classes.shareButton}
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
};

const mapDispatchToProps = (dispatch) => ({
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

export default connect(null, mapDispatchToProps)(withStyles(styles)(ShareItemForm));
