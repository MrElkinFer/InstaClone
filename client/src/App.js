import {useState} from "react";
import client from "./config/apollo";
import {ApolloProvider} from "@apollo/client";
import {ToastContainer} from "react-toastify";
import Auth from "./pages/Auth";


export default function App() {
  const [auth, setAuth] = useState(undefined);


  return (
    <ApolloProvider client={client}>
    {!auth ? <Auth/> : <h1>Estamos logeados</h1>}

    <ToastContainer
      position="top-right" 
      autoClose={5000}//se cierra el si han pasado 5 seg
      hideProgressBar
      newestOnTop // el nuevo toast aparecerá en la position y desplazará el anterior abajo.
      closeOnClick 
      rtl = {false}
      pauseOnFocusLoss //pausa el toast para que no desaparezca si se cambia de ventana
      pauseOnHover//si se pone el puntero encima no se va el toast
      draggable // hace que el toast sea arrastrable
    />
    </ApolloProvider>
  );
}  