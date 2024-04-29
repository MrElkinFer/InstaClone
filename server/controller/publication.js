const Publication = require("../models/publication");
const aws = require("../utils/aws-upload-image"); 
const User = require("../models/user");

async function publish(file, ctx){// se necesita desarrollar la forma de mandar imágenes a s3 primero.
   // console.log(file);
    //console.log(ctx); 
    //console.log("Publicando..");
    return null;
}

async function getPublications( username ){
    const user = await User.findOne({username})
    
    if(!user) throw new Error("Usuario no encontrado");
    const publications= await Publication.find().where({idUser: user._id}).sort({createAt: -1});
    return publications;
     
}

module.exports = {
    publish, // Publicación de imagenes
    getPublications, //función para mostrar las publicaciones que cada usuario cuelga
}; 