import gql from 'graphql-tag';
/**
 * Item and user-related queries and mutations.
 */

const ItemFields = gql`
  fragment ItemFields on Item { 
    
    id 
    title
    imageurl
    description
    date
    tags {
      id
      title 
    }

    itemowner {
      id
      fullname
      email
      bio
    }

    borrower {
      id
      fullname
      email
      bio
    }

  }
`;

export const ITEM_QUERY = gql`
  query item($id: ID!) {
    ...ItemFields
  }
  ${ItemFields}
`;

export const ALL_ITEMS_QUERY = gql`
  query items($filter: ID) {
    items(filter: $filter) {
      ...ItemFields
    }
  }
  ${ItemFields}
`;

export const ALL_USER_ITEMS_QUERY = gql`
  query user($id: ID!) {
    user(id: $id) {
      bio
      email
      fullname
      items {
        ItemFields
      }
      borrowed {
        ItemFields
      }
    }
  }
  ${ItemFields}
`;

export const ALL_TAGS_QUERY = gql`
  query {
    tags {
      id
      title
    }
  }
`;

// export const ADD_ITEM_MUTATION = gql`
//   mutation addItem($item: NewItemInput!, $image: Upload!) {
//     # @TODO: Pass the item and image into the addItem mutation as arguments
//     # and return the new item id when the mutation is complete.
//   }
// `;

/**
 * Auth-related queries and mutations.
 */

export const VIEWER_QUERY = gql`
  query {
  viewer{
    id
    fullname
    email
  }
}
`;

// export const LOGOUT_MUTATION = gql`
//   mutation {
//     # @TODO: Run the logout mutation.
//   }
// `;

export const SIGNUP_MUTATION = gql`
  mutation user($user: NewUserInput!) {
  signup(user: $user) {
    fullname
    email
  }
}
`;

export const LOGIN_MUTATION = gql`
mutation user($id: Login! ) {
  login(user: $id) {
    id
    fullname
  }
  
}
`;
