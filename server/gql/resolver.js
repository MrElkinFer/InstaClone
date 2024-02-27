const User = require("../models/user")

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
        Register: async (_,{input}) => {
           const newUser= input;
           newUser.email =newUser.email.toLowerCase();
           newUser.username = newUser.username.toLowerCase();
           
           const {email,username,password} = newUser;
           const foundEmail = await User.findOne({email});
           console.log(foundEmail);
           console.log(newUser);
           return null;
        }

    }
};

module.exports =resolvers;