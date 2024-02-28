const User = require("../models/user")
const bcryptjs = require("bcryptjs")

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

           //revisa si el correo ya está en uso:
           const foundEmail = await User.findOne({email});
           if(foundEmail) throw new Error("El email ya está en uso");

           //Revisa si el nobre de usuario ya esta en uso:
           const foundUserName = await User.findOne({username});
           if(foundUserName) throw new Error("El nombre de usuario ya esta en uso");

           //Espacio para la encriptación de la contraceña:
           const salt = await bcryptjs.genSaltSync(10);
           newUser.password = await bcryptjs.hash(password, salt);

           try{
            const user = new User(newUser);
            user.save();
            return user;

           }catch(error){
            console.log(error);
           }


           console.log(foundEmail);
           console.log(newUser);
           return null;
        }

    }
};

module.exports =resolvers;