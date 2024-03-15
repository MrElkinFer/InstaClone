import React from 'react'
import "./UserNotFound.scss"
import {Link} from "react-router-dom";

export default function UserNotFound() {
  return (
    <div className='user-not-found'>
      <p>
        Usuario no encontrado
      </p>
      <p>Es posible que el enlace que has seguido sea incorrecto o que el usuario se haya eliminado</p>
      <Link to={'/'} >Volver al inicio</Link>
    </div>
  )
}
