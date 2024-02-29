import {ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";

const httplik =createHttpLink({
    uri: "http://localhost:4000",
});

const client =new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: httplik,
});

export default client;

//Esta es la configueraión del cliente de Apollo.