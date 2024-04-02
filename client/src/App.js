import {useState, useEffect, useMemo} from "react";
import client from "./config/apollo";
import {ApolloProvider} from "@apollo/client";
import {ToastContainer} from "react-toastify";
import Auth from "./pages/Auth";
import AuthContext from "./context/AuthContext";
import { getToken,decodeToken, removeToken } from "./utils/token";
import Navigation from "./routes/Navigation";



export default function App() {
  const [auth, setAuth] = useState(undefined);


  useEffect(()=>{
    const token = getToken();
    if(!token){
      setAuth(null);
    }else{
      setAuth(decodeToken(token));
    }
  },[]);

  const logout = () => {
    removeToken();
    setAuth(null);
  };

  const setUser= (user)=> {
    setAuth(user);
  };

  const authData = useMemo(() =>({

    auth,
    logout,
    setUser
  }),
   [auth]
   )

   if(auth=== undefined) return null;


  return (

    <ApolloProvider client={client}>
      <AuthContext.Provider value={authData}>
        {!auth ? <Auth/> : <Navigation/>}

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
      </AuthContext.Provider>
    
    </ApolloProvider>
  );
}  