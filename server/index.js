const mongoose = require("mongoose");
const {ApolloServer} = require("apollo-server");
const typeDefs= require("./gql/schema")
const resolvers = require("./gql/resolver")
require("dotenv").config({path:".env"});


mongoose.connect(process.env.BBDD ,{
    //useNewUrlParser: true,   //Estos dos tags enstan en desuso.
    //useUnifiedTopology: true
}).then(() => server())
.catch(e => console.error(e))
//ejectua



//primer intento conexión graphql

function server() {
    const serverApollo = new ApolloServer({
            typeDefs,
            resolvers,
    });

    serverApollo.listen().then(({url})=>{
        console.log("########################################")
        console.log(`servidor listo en la url: ${url}`);
        console.log("########################################")
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
