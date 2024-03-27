const mongoose = require("mongoose"); // video
const {ApolloServer} = require("apollo-server"); // video

//const {ApolloServer} = require("apollo-server-express") // de posible solución
//const express = require ("express")
//const http =require("http");


//const {graphqlUploadExpress}  = require ("graphql-upload/graphqlUploadExpress.mjs"); // posible solución

const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolver");

require("dotenv").config({path:".env"});


mongoose.connect(process.env.BBDD ,{
    //useNewUrlParser: true,   //Estos dos tags enstan en desuso.
    //useUnifiedTopology: true
    
}).then(() => server())
.catch(e => console.error(e))
//ejectua   



//primer intento conexión graphql

function server() {  // async function server() { // nuevas lineas
    const serverApollo = new ApolloServer({
        typeDefs,
        cors: true, //{ origin: ["http://localhost:3000", "https://studio.apollographql.com/"], credentials: true },
        resolvers,
        context:(res) => {
            console.log("Hola")
        }
    });

    /*await serverApollo.start();//nuevas lineas
    const app = express();//nuevas lineas
    app.use(graphqlUploadExpress());//nuevas lineas
    serverApollo.applyMiddleware({ app });//nuevas lineas
    await new Promise((r) => app.listen({port: process.env.PORT || 4000}, r));//nuevas lineas
    console.log("########################################");
    console.log(`🚀 Servidor listo en: http://localhost:4000${serverApollo.graphqlPath}`);//nuevas lineas
    console.log("########################################");*/

   

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
