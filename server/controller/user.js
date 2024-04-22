const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function createToken(user, SECRET_KEY,expiresIn){
    const {id, name, email, username} = user;
    const pyload = {
        id,
        name,
        email,
        username,
    };
    return  jwt.sign(pyload, SECRET_KEY,{expiresIn});
}

async function register (input){

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

async function login (input){
    const {email,password} = input;
    //console.log("Email: "+ email);
    //console.log("Password: "+ password);
    
    
    const mensj = "Error en el correo la contraseña."; //guardo el mensaje en var a parte para que siempre sea el mismo.

    // Comprobación de email: por la lectura de la fución no hay necesidad de poner jerarquia al email por encima de password, aparte ayuda que llame en los errores la misma frase 
    const userFound = await User.findOne({email: email.toLowerCase()})
    if(!userFound) throw new Error(mensj); //si el correo no existe

    //comprobación de contraseña
    const passwordSucess = await bcryptjs.compare(password, userFound.password); // bcryptjs permite encriptar y comparar con la contraseña sin encriptar
    if(!passwordSucess) throw new Error(mensj); //si la contraseña no es correcta.


    //console.log(createToken(userFound,process.env.SECRET_KEY,"24h"));

    return {
        token: createToken(userFound,process.env.SECRET_KEY,"24h"),
    };

}

async function getUser(Id, username){
    let user = null;
    if(Id) user= await User.findById(Id);// findById para buscar tipos ID, no se deja con findOne
    if(username) user = await User.findOne({username});
    if(!user) throw new Error("El usuario no existe");

    return user;
}

async function updateAvatar(file){
    console.log(file);
    return null;
}

async function updateUser(input, ctx){
   
    const { id }= ctx.user; // mirar videos 83 para resolver la llegada de parámetros desde el contex para ver de donde viene el contex

    //const id = '65f4b7b0d0fb6beccedd37da';// id de test3@gmail.com

    try {

       
        // Contraseña:  
        if (input.currentPassword && input.newPassword) {
            
            //Cambiar la contraseña:
            const userFound = await User.findById(id);
            //const userFound = await User.findById(id);
            const passwordSucess = await bcryptjs.compare(
                input.currentPassword,
                userFound.password
            );
            //console.log( userFound );
            //console.log( passwordSucess );

            if(!passwordSucess) throw new Error("La contraseña es incorrecta");

            const salt = await bcryptjs.genSaltSync(10);
            const newPasswordCrypt = await bcryptjs.hash(input.newPassword, salt);

            await User.findByIdAndUpdate(id, {password: newPasswordCrypt});


        } else {
            await User.findByIdAndUpdate(id, input);// el id no llega del context
        }
        return true;
        
    } catch (error) {
        console.log("Error Elkin: "+ error);
        return false;
    }

}

async function searchUser(search){
    const users = await User.find({
        name: { // con esta expresión se encuentran valores con conincidencia parcial al "nombre" buscado.
            $regex: search,
            $options: "i"
        },
    })

    return users;
}

module.exports = {
    register, // Exporta la función register
    login,   //Exporta la función login 
    getUser,  //funcion que busca al usuario
    updateAvatar, // para cambiar el avatar
    updateUser, // para cambiar varias opciones de usuario en general
    searchUser, //Barra de buscador de contactos
}
