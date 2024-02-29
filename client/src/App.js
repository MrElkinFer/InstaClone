import { Button } from 'semantic-ui-react'
import client from "./config/apollo";
import {ApolloProvider} from "@apollo/client"

export default function app() {
  return (
    <ApolloProvider client={client}> <div className="app">
    <h1>
      Estamos en App
    </h1>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
    </div>
    </ApolloProvider>
   
  );
}


