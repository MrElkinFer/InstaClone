const userController = require("../controller/user");
//const GraphQLUpload = require('graphql-upload/GraphQLUpload.mjs');//nuevas lineas
//import { GraphQLUpload } from "graphql-upload";

const resolvers ={

    //Upload: GraphQLUpload,//nuevas lineas
    Query:{
        //user
        getUser: (_,{Id, username}) => userController.getUser(Id, username),
        searchUser: (_, {search}) => userController.searchUser(search),
    },
    Mutation:{
        //Usuario
        Register:  (_,{input}) => userController.register(input),
        Login:  (_,{input}) => userController.login(input), 
        updateAvatar: (_,{file}) => userController.updateAvatar(file),
        updateUser: (_,{input}, ctx) => userController.updateUser(input, ctx),
    }
}; 

module.exports = resolvers;