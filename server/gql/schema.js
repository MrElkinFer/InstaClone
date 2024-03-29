const {gql} = require("apollo-server"); // Primera implementación 
//const{gql} = require ("apollo-server-express");////nuevas lineas

const typeDefs = gql `

scalar Upload 

type User{
    Id: ID
    name: String
    username: String
    email: String
    siteweb: String
    description: String
    createAt: String 
    avatar: String
    password: String
}

type Token {
    token: String
}

type UpdateAvatar{
    status: Boolean
    urlAvatar: String
}

input LoginInput {
    email: String!
    password: String!
}

input UserInput{
    name: String!
    username: String!
    email: String!
    password: String!
}

type Mutation{

    Register(input: UserInput): User
    Login(input: LoginInput): Token
    
    updateAvatar (file: Upload!): UpdateAvatar
}
   

type Query{
    getUser(Id: ID, username: String): User
}

`;

module.exports = typeDefs;