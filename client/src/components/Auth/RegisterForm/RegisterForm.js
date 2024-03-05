import React from 'react';
import {Form, Button} from "semantic-ui-react";
import "./RegisterForm.scss";
import {useFormik} from "formik";
import * as Yup from "yup";



export default function RegisterForm(props) {

  const {setShowLogin} = props;

  const formik = useFormik({
    initialValues: initialValues(), // muestra los valores iniciales que lleva el formulario
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      username: Yup.string().matches(/^[a-zA-Z0-9-]*$/, "El nombre de usuario no puede contener espacios").required("El nombre de usuario es obligatorio"),
      email: Yup.string().email("El correo electrónico en obligatorio").required("El correo es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria").oneOf([Yup.ref("repeatPassword")], "La contraseña no coincide"), 
      repeatPassword: Yup.string().required("La contraseña es obligatoria").oneOf([Yup.ref("password"),"La contraseña no coincide"]),
    }),
    onSubmit: (formValue)=>{
      console.log("Formulario Enviado!!!");
      console.log(formValue);
    }
  });


const onSubmit= () => {console.log("formulario enviado")};

  return (
    <>
      <h2 className='register-form-title'>  
        Registrate para ver fotos y videos de tus amigos
      </h2>

      <Form className='register-form' onSubmit= {formik.handleSubmit}>
        <Form.Input type='text' placeholder= "Nombre y apellidos" name=  "name" value={formik.values.name} onChange={formik.handleChange} error={formik.errors.name && true} /> 
        <Form.Input type='text' placeholder= "Nombre de usuario" name=  "username" value={formik.values.username} onChange={formik.handleChange} error={formik.errors.username && true}/> 
        <Form.Input type='text' placeholder= "Correo electrónico" name=  "email" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email && true}/> 
        <Form.Input type='password' placeholder= "Contraseña" name=  "password" value= {formik.values.password} onChange={formik.handleChange} error={formik.errors.password && true}/>
        <Form.Input type='password' placeholder= "Repetir contraseña" name=  "repeatPassword" value={formik.values.repeatpassword} onChange={formik.handleChange} error={formik.errors.repeatPassword && true}/> 
      
        <Button type="submit" className='btn-submit'>Registrarse</Button>

      </Form>

    </>
  )
}



function initialValues(){
  return{
    name: "",
    username:"",
    email:"",
    password: "",
    repeatPassword: "",
  };
}