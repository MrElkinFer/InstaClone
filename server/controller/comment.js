const Comment = require("../models/comment");
const User = require("../models/user");//borrar
const Publication = require("../models/publication"); // borrar


function addComment(input,ctx){
    try {
        const comment = new Comment({
            idPublication: input.idPublication,
            idUser: ctx.user.id,
            comment: input.comment,
        });
        comment.save();
        return comment;
    } catch (error) {
        console.log(error);
    }
    
}
async function getComments(idPublication){

    const result = await Comment.find({idPublication})
    //console.log(result);
    return result; 
}

async function PruebaUser(idUser){
    let result = null;
    result = await User.findById(idUser);
    return result;
}

async function PruebaUserDos(idPublication){
    let result = null;
    result = await Comment.find({idPublication});
    return result;
}


module.exports = {
    addComment,
    getComments,
    PruebaUser,//borrar
    PruebaUserDos,//borrar
};