const mongoose = require("mongoose");
const {ApolloServer} = require("apollo-server");
const typeDefs= require("./gql/schema.js")
const resolvers = require("./gql/resolver.js")
require("dotenv").config({path:".env"});


mongoose.connect(process.env.BBDD ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => server())//console.log("Conectado"))
.catch(e => console.error(e))
//ejectua

function server() {
    const serverApollo = new ApolloServer({
            typeDefs,
            resolvers,
    });

    serverApollo .listen().then((Response)=>{
        
        console.log("servidor ON");
    })

}










/*

// entender la forma en que funciona node.

async function a(){
    await prueba()
}

// async / await / promesas / callback
async function prueba(){ // programacion imperativa... : promise/promesa
    try{ //esperar
        await mongoose.connect(process.env.BBDD ,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        //then
       console.log("conectado")
    }catch(e){
        //catch
        console.error(e)
    }
}


// async await
const conexion = async () => {
    try{
        mongoose.connect(process.env.BBDD)
        console.log('conectado!!!!!')
    }catch(error){
        console.log("algo salio mal!!:  ...  "+error)
    }
}*/
