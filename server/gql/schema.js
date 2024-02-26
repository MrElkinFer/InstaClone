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
input UserInput{
    name: String!
    username: String!
    email: String!
    password: String!
}

type Mutation{
    # Usuario

    Register(input: UserInput): User
}

type Query{
    getUser: User
}

`;

module.exports = typeDefs;