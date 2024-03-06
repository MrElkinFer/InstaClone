import {gql} from "@apollo/client";

export const REGISTER = gql `

    mutation Register($input: UserInput){
        Register(input: $input){
            Id
            name
            username
            email
            createAt
        }
    }

`;

export const LOGIN =  gql `

    mutation Mutation($input: LoginInput) {
        Login(input: $input) {
            token
        }
    }
`;
