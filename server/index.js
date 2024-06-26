const mongoose = require("mongoose"); // video
const {ApolloServer} = require("apollo-server"); // video
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolver");
const {jwtDecode} = require("jwt-decode");
//const express = require ("express");
//const graphql  = require ('graphql-upload'); // posible solución
require("dotenv").config({path:".env"});

//const {ApolloServer} = require("apollo-server-express") // de posible solución


mongoose.connect(process.env.BBDD ,{
    //useNewUrlParser: true,   //Estos dos tags enstan en desuso.
    //useUnifiedTopology: true
    
}).then(() => server())
.catch(e => console.error(e))   


//primer intento conexión graphql

function server() {  // async function server() { // nuevas lineas
    const serverApollo = new ApolloServer({
        typeDefs,
        cors:{ origin: ["http://localhost:3000", "https://studio.apollographql.com"], credentials: true },// linea para arreglar el cors
        resolvers,
        context: ({req}) => {
            const token = req.headers.authorization;
            //console.log(token);// hasta aquí funciona min 9:00 vid 83
            //console.log(jwtDecode(token));
            if(!token){
                return {};
            }else{
                const user = jwtDecode(token);
                //console.log(user);
                return { user };
                
            }
            /*if (token){
                try {
                    const user = jwt.verify(
                        token,
                    )
                    return {
                        user,
                    };
                } catch (error) {
                    console.log("#### ERROR ####")
                    console.log(error);
                    throw new Error("Token invalido");
                }
            }*/
        }


       /* context:(request) => {
            console.log("headers ",request);

            return {user: {
                id: new mongoose.Types.ObjectId("65f4b7b0d0fb6beccedd37da")  
            }}
        }*/
    });

    /*await serverApollo.start();//nuevas lineas
    const app = express();//nuevas lineas
    
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
