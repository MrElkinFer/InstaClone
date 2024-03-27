const userController = require("../controller/user");
//const GraphQLUpload = require('graphql-upload/GraphQLUpload.mjs');//nuevas lineas
//import { GraphQLUpload } from "graphql-upload";

const resolvers ={

    //Upload: GraphQLUpload,//nuevas lineas
    Query:{
        //user
        getUser: (_,{Id, username}) => userController.getUser(Id, username),
    },
    Mutation:{
        //Usuario
        Register:  (_,{input}) => userController.register(input),
        Login:  (_,{input}) => userController.login(input), 
        updateAvatar: (_,{file}) => userController.updateAvatar(file)
    }
}; 

module.exports = resolvers;