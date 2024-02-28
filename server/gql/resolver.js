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
        Register: async (_,{input}) => userController.register(input),
           
        

    }
};

module.exports = resolvers;