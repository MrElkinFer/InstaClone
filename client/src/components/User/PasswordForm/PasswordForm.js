import React from 'react';
import "./PasswordForm.scss";
import { Button, Form } from 'semantic-ui-react';
import {useFormik} from 'formik';
//import * as Yup from 'yup'
import * as  Yup from 'yup';




export default function PasswordForm() {
    
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(
            {
                CurrentPassword: Yup.string().required(),
                NewPassword: Yup.string().required().oneOf([Yup.ref("RepeatPassword")],"la contraseña no es igual"),
                RepeatPassword: Yup.string().required().oneOf([Yup.ref("NewPassword")], "no coincide con la contraseña"),
            }
        ),
        // lo que se ejecuta si el formulario es correcto
        onSubmit: (formValue) => {
            console.log("Formulario enviado");
            console.log(formValue); // revisar que se envía
        }
    });

  return (
    <Form className='password-form'>
        <Form.Input 
            type='password' 
            placeholder="Contraseña actual" 
            name="CurrentPassword" 
            value = {formik.values.CurrentPassword} 
            onChange={formik.handleChange} 
            error={formik.errors.CurrentPassword && true}
        />
        <Form.Input 
            type='password' 
            placeholder = "Nueva contraseña" 
            name="NewPassword" 
            value = {formik.values.NewPassword} 
            onChange={formik.handleChange} 
            error={formik.errors.NewPassword && true}
        />
        <Form.Input 
            type='password' 
            placeholder = "Repetir contraseña" 
            name = "RepeatPassword" 
            value = {formik.values.RepeatPassword} 
            onChange={formik.handleChange} 
            error={formik.errors.RepeatPassword && true}
        /> 
        <Button type ='submit' className='btn-submit'>Actualizar</Button>
    </Form>
  )
};


function initialValues(){
    return{
        CurrentPassword: "",
        NewPassword: "",
        RepeatPassword: "",
    };
};
