const mongoose= require("mongoose");
const Schema = mongoose.schema;



const UserSchema = Schema({
    name: {
        type: String,
        require: true,
    },

    username:{
        type: String,
        require: true,
        trim: true,
        unique: true,
    },

    email:{
        type: String,
    },
    avatar:{
        type: String,
    },
    siteweb:{
        type: String,
    },
    description:{
        type: String,},
    password:{
        type: String,},
    createAt:{
        type: String,}  

});

module.exports = mongoose.model("User", UserSchema);
