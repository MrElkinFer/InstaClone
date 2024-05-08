import {gql} from '@apollo/client';

export const PUBLISH = gql`
mutation publish($file: String!){
    publish(file: $file){
        status
    }
}`;

export const GET_PUBLICATIONS =gql`
query GetPublications($username: String!) {
  getPublications(username: $username) {
    id
    idUser
    file
    typeFile
    createAt
  }
}
`;

export const GET_PUBLICATIONS_FOLLOWEDS = gql`
query GetPublicationsFolloweds {
  getPublicationsFolloweds {
    id
    idUser {
      avatar
      name
      username
    }
    file
    createAd
    typeFile
  }
}`;
