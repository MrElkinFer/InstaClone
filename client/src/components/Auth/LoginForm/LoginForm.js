import React,{useState} from 'react';
import "./LoginForm.scss";// importación de el componente básico creado
import {Button, Form} from "semantic-ui-react";
import { useFormik } from 'formik';
import {useMutation} from "@apollo/client";
import {LOGIN} from "../../../gql/user";
import {setToken,decodeToken} from "../../../utils/token";
import useAuth from '../../../hooks/useAuth';
import * as yup from "yup";


export default function LoginForm() {

  const [error, setError] = useState(""); //para crear el aviso de alerta por contraseña o correo 

  const [Login] = useMutation(LOGIN);

  //const auth = useAuth;

  const{setUser} = useAuth();

  const formik = useFormik({
    initialValues: inicialValLogin(),//la fución initialValLogin está abajo, fuera de la función por defecto.

    validationSchema: yup.object({
      email: yup.string().email("Ingresa un correo valido").required("El correo es obligatorio"),
      password: yup.string().required("debes introducir tú contraseña para poder ingresar")
    }),

    onSubmit: async (formData)=>{
      try{
        setError("");
         const {data} = await Login({
          variables:{
            input: formData
          }
         });
         const {token}= data.Login;
         setToken(token);
         setUser(decodeToken(token)); 
      }catch(e){
        setError(e.message);
      }
    }
  })

  return (// con la función onSubmit.handleSubmit se llama del objeto formik tipo useFormik para poder usarlo
    <Form className='login-form' onSubmit={formik.handleSubmit}> 
        <h2>inicia sesión para ver fotos y videos de tus amigos</h2>
        <Form.Input type='text' placeholder="Correo electrónico" name= "email" value = {formik.values.email}  onChange={formik.handleChange} error={formik.errors.email && true} />
        <Form.Input type='password' placeholder="Contraseña" name= "password" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password && true} />
        <Button type='submit' className='btn-submit'> Iniciar sesión </Button>
        {error && <p className='submit-error'>{error}</p>} 
    </Form>
  )
};

function inicialValLogin()
{
  return{
    email: "",
    password: "",
  }
};