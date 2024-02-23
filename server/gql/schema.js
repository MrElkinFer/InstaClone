const {gql} = require("apollo-server");

const typeDefs = gql `
type User{
    Id: ID
    name: String
    nameuser: String
}

type Query{
    getUser: User
}

`;

module.exports = typeDefs;