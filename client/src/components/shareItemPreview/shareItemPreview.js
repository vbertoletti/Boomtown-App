import React from 'react';
import CardForm from '../CardForm/CardForm';
import { connect } from 'react-redux';

const ShareItemPreview = ({ item}) => {

  return <CardForm item={item} />;
  
};

const mapStateToProps = state => ({
  item: state.shareItemPreview
});

export default connect(mapStateToProps)(ShareItemPreview);