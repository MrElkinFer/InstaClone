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

export const GET_USER = gql `

    query GetUser($id: ID, $username: String) {
        getUser(Id: $id, username: $username) {
            name
            username
            email
            siteweb
            description
            avatar
        }
    }
`;

export const UPDATE_AVATAR = gql `
    mutation updateAvatar($file: Upload!) {
        updateAvatar(file: $ file) {
            status
            urlAvatar
        }
    }
`;

export const UPDATE_USER = gql `
    mutation updateUser($input: userUpdateInput) {
        updateUser(input: $input)
    }
`;
export const SEARCH = gql`
    query SearchUser($search: String) {
        searchUser(search: $search) {
            name
            avatar
            username            
        }
    }
`;
/*export const SEARCH = gql`
    query SearchUser($search: String) {
        (search: $search) {
        name
        avatar
        siteweb
        username
        email
        description
    }
}`;*/

