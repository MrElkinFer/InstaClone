import { gql } from "@apollo/client";

export const IS_FOLLOW = gql`
    query Query($username: String!){
        isFollow(username: $username)
    }
`;

export const FOLLOW = gql`
    mutation follow($username: String!){
        follow(username: $username)
    }
`;

export const UN_FOLLOW = gql`
    mutation UnFollow($username: String!) {
        unFollow(username: $username)
    }
`;

export const GET_FOLLOWERS = gql`
    query getFollowers($username: String!) {
        getFollowers(username: $username) {
            username
            name
            avatar
        }
    }
`;

export const GET_FOLLOWEDS = gql`
    query GetFolloweds($username: String!) {
        getFolloweds(username: $username) {
            avatar
            name
            username
        }
    }
`;
    