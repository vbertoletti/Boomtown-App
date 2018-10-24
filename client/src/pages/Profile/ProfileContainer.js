import React, { Component } from 'react';
import { Query } from "react-apollo";
import Profile from './Profile';
import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries';

class ProfileContainer extends Component {
  render() {
    return(
      <Query query={ALL_USER_ITEMS_QUERY} variables={{id: 1}} >
      {
        ({loading, error, data}) => 
        {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          if (data) {
            console.log(data)
            return <Profile data={data} />
          }

        }
      }
      </Query>
    )
  }
}

export default ProfileContainer;
