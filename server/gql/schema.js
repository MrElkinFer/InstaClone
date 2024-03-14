const {gql} = require("apollo-server");

const typeDefs = gql `
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
}

type Query{
    getUser(Id: ID, username: String): User
}

`;

module.exports = typeDefs;