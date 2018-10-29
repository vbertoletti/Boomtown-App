import React from 'react';
import CardForm from '../CardForm/CardForm';
import { connect } from 'react-redux';

const ShareItemPreview = ({ shareItemPreview }) => {
  return <CardForm item={shareItemPreview}/>;
  
};

const mapStateToProps = state => ({
  shareItemPreview: state.shareItemPreview
});

export default connect(mapStateToProps)(ShareItemPreview);