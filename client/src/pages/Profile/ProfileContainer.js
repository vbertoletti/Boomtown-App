import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Profile from './Profile';
import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries';
import { ViewerContext } from '../../context/ViewerProvider';

class ProfileContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer, loading }) => {
          return (
            <Query query={ALL_USER_ITEMS_QUERY} variables={{ id: viewer.id }}>
              {({ loading, error, data }) => {
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;
                if (data) return <Profile viewerId={viewer.id} data={data} />;
              }}
            </Query>
          );
        }}
      </ViewerContext.Consumer>
    );
  }
}

export default ProfileContainer;
