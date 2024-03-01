import React,{useState} from 'react'
import "./Auth.scss";
import {Container, Image} from "semantic-ui-react";
import instaclone from "../../assets/png/instaclone.png";
import "./Auth.scss";
import RegisterForm from '../../components/Auth/RegisterForm';

export default function Auth() {
  
  const [showLogin, setShowLogin] =useState(true);// true en caso de no tener cuenta y false en caso de tenerla
  
  return (
    <Container fluid className='auth'>
      <Image src={instaclone}/>
       <div className='container-form'>
          {!showLogin ? <p>Formulario de Login</p>:<RegisterForm setShowLogin={setShowLogin}/>}

       </div>

       <div className= 'change-form'>
        <p>
          {showLogin ? // si showLogin en true haga:
          <> 
            ¿No tienes cuenta?
            <span onClick={() => setShowLogin(!showLogin)}>Regístrate</span>
          </>:
          <>
            ¡Entra con tu cuenta!
            <span onClick={() => setShowLogin(!showLogin)}>Iniciar sesión</span>
          </>
          }
        </p>
       </div>
    </Container>
  )
}
