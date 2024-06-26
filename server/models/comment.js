const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = Schema({
    idPublication:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Publication',
    },
    idUser:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    comment:{
        type: String,
        require: true,
        trim: true,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports= mongoose.model("Comment", commentSchema);
