const userController = require("../controller/user");


const resolvers ={
    Query:{
        //user
        getUser: () => {
            console.log("Obteniendo usuario")
            return null;
        },
    },
    Mutation:{
        //Usuario
        Register:  (_,{input}) => userController.register(input),
        Login:  (_,{input}) => userController.login(input),        

    }
}; 

module.exports = resolvers;