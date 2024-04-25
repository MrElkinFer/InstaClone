const Publication = require("../models/publication");


async function publish(file, ctx){
    console.log(file);
    console.log(ctx);
    console.log("Publicando..");
    return null;
}

module.exports = {
    publish, // Publicación de imagenes
};