import React from 'react';
import Cardform from '../CardForm/CardForm';
import { connect } from 'react-redux';

const ShareItemPreview = ({ shareItemPreview }) => {
  return <Cardform item={shareItemPreview}/>;
  
};

const mapStateToProps = state => ({
  shareItemPreview: state.shareItemPreview
});

export default connect(mapStateToProps)(ShareItemPreview);