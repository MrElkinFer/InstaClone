const Publication = require("../models/publication");
const aws = require("../utils/aws-upload-image"); 
const User = require("../models/user");
const Follow = require ("../models/follow");

async function publish(file, ctx){// se necesita desarrollar la forma de mandar imágenes a s3 primero.
    console.log(file);
    const newPublication = await Publication.create ({ file, idUser: ctx.user.id, typeFile: "image/jpg",});
    //console.log(ctx); 
    //console.log("Publicando..");
    return newPublication;
}

async function getPublications( username ){
    const user = await User.findOne({username})
    
    if(!user) throw new Error("Usuario no encontrado");
    const publications= await Publication.find().where({idUser: user._id}).sort({createAt: -1});
    return publications;
     
}

async function getPublicationsFolloweds(ctx){
     
     const followeds = await Follow.find({idUser: ctx.user.id}).populate("follow"); // el populate("follow") es para sacar todos los datos del usuario con ID que aparezca en follow.
     
     const followedsList = [];
     for await (const data of followeds){
        followedsList.push(data.follow);
     }

     const publicationsList = [];
     for await(const data of followedsList){
        const publications = await Publication.find().where({idUser: data._id}).sort({createAt: -1}).populate('idUser').limit(10);//límite de publicaciones a 10
        publicationsList.push(...publications);
    } 
    const result = publicationsList.sort((a,b)=>{return new Date(b.createAt) - new Date(a.createAt)}); //sort con fechas en javascript.
    return result;
}

module.exports = {
    publish, // Publicación de imagenes
    getPublications, //función para mostrar las publicaciones que cada usuario cuelga
    getPublicationsFolloweds,
}; 