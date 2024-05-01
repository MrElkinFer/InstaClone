const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PublicationSchema= Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    file: {
        type: String,
        require: true,
        trim: true,
    },
    typeFile:{
        type: String,
        trim: true,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
});
//{ file, idUser: , typeFile: "image/jpg",}
module.exports = mongoose.model("Publication", PublicationSchema);