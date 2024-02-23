const mongoose = require("mongoose");
require("dotenv").config({path:".env"});


mongoose.connect(process.env.BBDD,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}, (err,_) =>{
    if(err){
        console.log("Algo a fallado!")
    }else{
        console.log("Todo va de maravilla!")
    }
})

