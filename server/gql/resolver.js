const userController = require("../controller/user");


const resolvers ={
    Query:{
        //user
        getUser: (_,{Id, username}) => userController.getUser(Id, username),
    },
    Mutation:{
        //Usuario
        Register:  (_,{input}) => userController.register(input),
        Login:  (_,{input}) => userController.login(input),        

    }
}; 

module.exports = resolvers;