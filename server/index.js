const mongoose = require("mongoose");
require("dotenv").config({path:".env"});

//console.log(process.env.BBDD)

mongoose.connect(process.env.BBDD,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
});


/*const conexion= async () =>{
    try{
        mongoose.set('strictQuery',false)
        mongoose.connect(process.env.BBDD)
        console.log('conectado!!!!!')
    }catch(error){
        console.log("algo salio mal!!:  ...  "+error)
        process.exit()
    }
}*/
    }
}*/