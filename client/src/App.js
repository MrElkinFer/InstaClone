//import { Button } from 'semantic-ui-react'
import {useState} from "react";
import client from "./config/apollo";
import {ApolloProvider} from "@apollo/client"
import Auth from "./pages/Auth";


export default function App() {
  const [auth, setAuth] = useState({name: "Fer"});


  return (
    <ApolloProvider client={client}>
    {!auth ? <Auth/> : <h1>Estamos logeados</h1>}
    </ApolloProvider>
  );
}  