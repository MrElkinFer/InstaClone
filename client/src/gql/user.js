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
