import React from 'react';
import CardForm from '../CardForm/CardForm';
import { connect } from 'react-redux';

const ShareItemPreview = ({ shareItemPreview, item}) => {
  return <CardForm item={shareItemPreview} />;
  
};

const mapStateToProps = state => ({
  ShareItemPreview: state.ShareItemPreview
});

export default connect(mapStateToProps)(ShareItemPreview);