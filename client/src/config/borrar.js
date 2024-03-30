
import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from 'apollo-cache-inmemory';
import {createUploadLink} from 'apollo-upload-client';

const uploadLink = createUploadLink({
    uri: "http://localhost:4000",
    credentials: "include"
});

const client =new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: uploadLink,
});

export default client;

//Esta es la configueraión del cliente de Apollo.



//______________________________________________________________

import {ApolloClient, InMemoryCache,createHttpLink} from "@apollo/client";
//import { ApolloClient } from "@apollo/client";
//import { InMemoryCache } from 'apollo-cache-inmemory';
//import {createUploadLink} from 'apollo-upload-client';


const httplik = createHttpLink({
//const uploadLink = createUploadLink({
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