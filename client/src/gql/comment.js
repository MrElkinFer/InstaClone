import { gql } from "@apollo/client"; 

export const ADD_COMMENT = gql `
mutation AddComment($input: commentInput) {
    addComment(input: $input) {
      idPublication
      comment
    }
  }`;

export const GET_COMMENT = gql `
query Query($idPublication: ID!) {
  getComments(idPublication: $idPublication) {
    comment
    idUser{
      username
      avatar
    }
  }
}
`;