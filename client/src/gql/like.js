import { gql } from "@apollo/client";

export const ADD_LIKE = gql`
mutation AddLike($idPublication: ID!) {
        addLike(idPublication: $idPublication)
    }    
`;

export const DELETE_LIKE = gql`
mutation DeleteLike($idPublication: ID!) {
        deleteLike(idPublication: $idPublication)
    }    
`;

export const COUNT_LIKE = gql`
query Query($idPublication: ID!) {
  countLikes(idPublication: $idPublication)
}`;

export const IS_LIKE = gql`
    query Query($idPublication: ID!) {
        isLike(idPublication: $idPublication)
    }
`;