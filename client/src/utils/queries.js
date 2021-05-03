// Queries.js store all of the GraphQL query requests
import gql from 'graphql-tag';

// queries for logged in users
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;