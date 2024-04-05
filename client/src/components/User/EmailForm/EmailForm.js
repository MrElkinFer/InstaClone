import React from 'react';
import "./EmailForm.scss";
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import "../../../gql/user";
import * as  yup from 'yup';
import { useFormik } from 'formik';




export default function EmailForm(props) {


    const { currentEmail, setShowModal } = props;

   // const [] = useMutation(USER_U); CONTUNÚA

    //console.log( currentEmail );

    const formik = useFormik({
        initialValues: {
            email: currentEmail || "",
        },
        validationSchema: yup.object({    
            email: yup.string().email("Ingresa un correo valido").required("El correo es obligatorio"),
        }),
    
        onSubmit: (formData) => {
            console.log(formData);
        },
        })


  return (
    <Form className='email-form' onSubmit={formik.handleSubmit}>
        <Form.Input 
            placeholder="Escribe tu nuevo nombre" 
            name="email" 
           value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email && true}
        />
        <Button type='submit' className='btn-submit'>Actualizar</Button>
    </Form>

    
    
  )
}

