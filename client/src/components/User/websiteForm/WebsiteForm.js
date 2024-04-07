import React from 'react';
import './WebsiteForm.scss';
import { UPDATE_USER } from '../../../gql/user';
import {Button, TextArea, Form} from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useMutation } from '@apollo/client';
import {toast} from 'react-toastify';

export default function WebsiteForm(props) {

    //Trayendo los argumentos enviados desde el setting form:
    const {curretSiteweb, refetch, setShowModal}= props;
    

    //mutación para la actualización de la opción de sitio web:
    const [updateUser] = useMutation(UPDATE_USER);

    console.log("aquí")
    //dando formato al formulario con yup y formik:
    const formik = useFormik({

        initialValues: {
            siteweb: "" || curretSiteweb,
        },
        
        validationSchema: yup.object({
            siteweb: yup.string().url("Solo direcciones url"),
        }),

        onSubmit: async (formData) => {
            try {
                await updateUser({
                    variables:{
                        input: {
                            siteweb: formData.siteweb,//Porqué el mismo? 
                        }
                    }
                })

                console.log("aquí +")
                refetch();

                setShowModal(false);

                toast.success("El cambio de sitio web ha sido exitoso");

            } catch (error) {
                toast.error("Algo salio mal")
            }
           
            

        }
    })


    //Formulario de actualización de sitio web:
  return (
    <Form className='website-form' onSubmit={formik.handleSubmit}>
        <TextArea
            name= "siteweb"
            value={formik.values.siteweb}
            onChange={formik.handleChange}
            error={formik.errors.siteweb && true}
        />
        <Button type='submit' className='btn-submit'>Actualizar sitio</Button>
    </Form>
  )
}
