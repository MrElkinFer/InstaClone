import React from 'react';
import {Form, Button} from "semantic-ui-react";
import "./RegisterForm.scss";
import {useFormik} from "formik";


export default function RegisterForm(props) {

  const {setShowLogin} = props;

  const formik = useFormik({
    initialValues: initialValues(), // muestra los valores iniciales que lleva el formulario
    validationSchema: null, //por ahora se entiende como que existe pero no está.
    onSubmit: (formValue)=>{
      console.log("Formulario Enviado!!!");
      console.log(formValue);
    }
  });


  //const onSubmit= () => {console.log("formulario enviado")};

  return (
    <>
      <h2 className='register-form-title'>
        Registrate para ver fotos y videos de tus amigos
      </h2>

      <Form className='register-form' onSubmit= {formik.handleSubmit}>
        <Form.Input type='text' placeholder= "Nombre y apellidos" name=  "name" onChange={formik.handleChange} /> 
        <Form.Input type='text' placeholder= "Nombre de usuario" name=  "username" onChange={formik.handleChange}/> 
        <Form.Input type='text' placeholder= "Correo electrónico" name=  "email" onChange={formik.handleChange}/> 
        <Form.Input type='password' placeholder= "Contraseña" name=  "password" onChange={formik.handleChange}/>
        <Form.Input type='password' placeholder= "Repetir contraseña" name=  "repeatPassword" onChange={formik.handleChange}/> 
      
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
    repeatpassword: "",
  };
}