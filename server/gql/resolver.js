const resolvers ={
    Query:{
        //user
        getUser: () => {
            console.log("Obteniendo usuario")
            return null;
        },
    },
    Mutation:{
        //Usuario
        Register: (_,{input}) => {
            console.log("Registrando usuario");

            return null;
        }

    }
};

module.exports =resolvers;