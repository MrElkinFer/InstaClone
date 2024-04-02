import {ApolloClient, InMemoryCache,createHttpLink} from "@apollo/client";
//import { ApolloClient } from "@apollo/client";
//import { InMemoryCache } from 'apollo-cache-inmemory';

//import {} from 'apollo-upload-client/createUploadLink.mjs';


const httplik = createHttpLink({
//const uploadLink = ({
    uri: "http://localhost:4000",
    credentials: "include",
    //headers,
});

const client =new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: httplik,
    //link: uploadLink, 
});

export default client;

//Esta es la configueraión del cliente de Apollo.