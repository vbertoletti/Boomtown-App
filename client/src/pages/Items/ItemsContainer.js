import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Items from './Items';
import { ALL_ITEMS_QUERY } from '../../apollo/queries';
import { ViewerContext } from '../../context/ViewerProvider';

class ItemsContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ loading, viewer }) => {
          return (
            <Query query={ALL_ITEMS_QUERY} variables={{ filter: viewer.id }}>
              {({ loading, error, data }) => {
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;
                if (data) {
                  return <Items data={data} />;
                }
              }}
            </Query>
          );
        }}
      </ViewerContext.Consumer>
    );
  }
}

export default ItemsContainer;
