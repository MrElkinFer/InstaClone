import React from 'react'
import "./LoginForm.scss";// importación de el componente básico creado
import {Button, Form} from "semantic-ui-react";


export default function LoginForm() {
  return (
    <Form className='login-form'>
        <Form.Input type='text' placeholder="Correo electrónico" name= "email" />
        <Form.Input type='password' placeholder="Contraseña" name= "password" />
        <Button type='submit' className='btn-submit'> Iniciar sesión </Button>
    </Form>
  )
}
