import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { ALL_TAGS_QUERY } from '../../apollo/queries';
import Share from './Share';

class ShareContainer extends Component {
  render() {
    return (
      <Query query={ALL_TAGS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'loading';
          if (error) return `${error}`;
          if (data) {
            console.log(data);
            return <Share tags={data.tags} />;
          }
        }}
      </Query>
    );
  }
}

export default ShareContainer;