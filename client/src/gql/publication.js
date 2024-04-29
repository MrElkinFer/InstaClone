import {gql} from '@apollo/client';

export const PUBLISH = gql`
mutation publish($file: Upload){
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