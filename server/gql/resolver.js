const user = require("../models/user")

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
        Register: (_,{input}) => {
           const newUser= input;
           newUser.email =newUser.email.toLowerCase();
           newUser.username = newUser.username.toLowerCase();
           console.log(newUser);
           return null;
        }

    }
};

module.exports =resolvers;