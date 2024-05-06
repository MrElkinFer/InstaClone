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

type Publish{
    status: Boolean
    urlFile: String 
}

type Publication{ 
    id: ID
    idUser: ID
    file: String
    typeFile: String
    createAt: String
}
type commEnt{
    idPublication: ID
    idUser: User
    comment: String
    createAt: String
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

input userUpdateInput {
    name: String
    email: String
    currentPassword: String
    newPassword: String
    siteweb: String
    description: String
}

input commentInput{
    idPublication: ID
    comment: String
}

type Mutation{

    Register(input: UserInput): User
    Login(input: LoginInput): Token
    updateAvatar (file: Upload!): UpdateAvatar
    updateUser (input: userUpdateInput): Boolean 

    follow(username: String!): Boolean
    unFollow(username: String!): Boolean

    publish(file: String!): Publish

    addComment(input: commentInput): commEnt
}
   

type Query{
    getUser(Id: ID, username: String): User
    searchUser( search: String ):[User]
    isFollow( username: String!): Boolean
    getFollowers( username: String! ): [User]
    getFolloweds( username: String! ): [User]
    getPublications( username: String!): [Publication]
    getComments(idPublication: ID!): [commEnt]
}

`;

module.exports = typeDefs;